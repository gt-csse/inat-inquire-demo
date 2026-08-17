#!/usr/bin/env node

// Canonical editable slide source. Run from the repository root with `make slides`.

import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const ASSETS = path.join(ROOT, "slides", "assets");
const OUTPUT = path.join(ROOT, "slides", "inat-inquire-demo.pptx");
const QA_DIR = path.join(ROOT, "slides", ".codex-tmp", "native-build-qa");

async function loadArtifactTool() {
  try {
    return await import("@oai/artifact-tool");
  } catch (primaryError) {
    const bundledRoot = path.join(
      process.env.HOME || "",
      ".cache",
      "codex-runtimes",
      "codex-primary-runtime",
      "dependencies",
      "node",
      "node_modules",
      "@oai",
      "artifact-tool",
    );
    const candidates = [
      path.join(bundledRoot, "dist", "node", "artifact_tool.mjs"),
      path.join(bundledRoot, "dist", "artifact_tool.mjs"),
    ];
    for (const bundled of candidates) {
      try {
        return await import(pathToFileURL(bundled).href);
      } catch {
        // Try the next bundled runtime layout.
      }
    }
    {
      throw new Error(
        "@oai/artifact-tool is required. Install it in the project or run from the Codex presentation runtime.",
        { cause: primaryError },
      );
    }
  }
}

const { Presentation, PresentationFile } = await loadArtifactTool();

const W = 1280;
const H = 720;
const COLORS = {
  navy: "#003057",
  blue: "#0057A8",
  orange: "#FF5A1F",
  gold: "#B3A369",
  green: "#16734A",
  ink: "#12314B",
  muted: "#5B6878",
  line: "#D7DEE5",
  pale: "#F3F6F7",
  warm: "#FFF7F1",
  white: "#FFFFFF",
};
const FONT = "Aptos";
const FONT_DISPLAY = "Aptos Display";

function addShape(slide, geometry, position, fill = "none", lineFill = "none", lineWidth = 0) {
  return slide.shapes.add({
    geometry,
    position,
    fill,
    line: { style: "solid", fill: lineFill, width: lineWidth },
  });
}

function addText(slide, text, position, options = {}) {
  const shape = addShape(slide, "textbox", position, options.fill || "none");
  shape.text = text;
  shape.text.style = {
    typeface: options.typeface || FONT,
    fontSize: options.fontSize || 18,
    bold: options.bold || false,
    color: options.color || COLORS.ink,
    alignment: options.alignment || "left",
    verticalAlignment: options.verticalAlignment || "middle",
    autoFit: options.autoFit || "shrinkText",
    wrap: options.wrap || "square",
    lineSpacing: options.lineSpacing,
    insets: options.insets || { top: 0, right: 0, bottom: 0, left: 0 },
  };
  return shape;
}

function addTopBand(slide) {
  const segments = [COLORS.gold, COLORS.orange, COLORS.green, COLORS.blue];
  segments.forEach((fill, index) => {
    addShape(slide, "rect", { left: index * 320, top: 0, width: 320, height: 7 }, fill);
  });
}

function addPageNumber(slide, page, dark = false) {
  const circle = addShape(
    slide,
    "ellipse",
    { left: 1218, top: 660, width: 34, height: 34 },
    dark ? COLORS.navy : COLORS.white,
    dark ? "#6D8294" : COLORS.line,
    1,
  );
  circle.name = `page-${page}`;
  addText(slide, String(page), { left: 1218, top: 660, width: 34, height: 34 }, {
    fontSize: 14,
    bold: true,
    color: dark ? COLORS.white : COLORS.navy,
    alignment: "center",
  });
}

function addHeader(slide, { title, subtitle, stage, stageLabel, page, titleSize = 36 }) {
  slide.background.fill = "#FCFCFA";
  addTopBand(slide);
  addText(slide, stageLabel || stage.toUpperCase(), { left: 1060, top: 20, width: 160, height: 24 }, {
    fontSize: 13,
    bold: true,
    color: stage === "harm" ? COLORS.orange : stage === "control" ? COLORS.gold : stage === "evidence" ? COLORS.blue : COLORS.green,
    alignment: "right",
  });
  addText(slide, title, { left: 64, top: 54, width: 1130, height: 58 }, {
    fontSize: titleSize,
    bold: true,
    color: COLORS.navy,
    typeface: FONT_DISPLAY,
    wrap: "none",
  });
  addShape(slide, "rect", { left: 64, top: 129, width: 6, height: 42 }, COLORS.orange);
  addText(slide, subtitle, { left: 84, top: 126, width: 1105, height: 48 }, {
    fontSize: 20,
    bold: true,
    color: COLORS.navy,
    wrap: "none",
  });
  addPageNumber(slide, page);
}

function addCardGridHeader(slide, { title, stage, page }) {
  slide.background.fill = "#FCFCFA";
  addTopBand(slide);
  addText(slide, stage.toUpperCase(), { left: 1060, top: 20, width: 160, height: 24 }, {
    fontSize: 13,
    bold: true,
    color: stage === "harm" ? COLORS.orange : COLORS.green,
    alignment: "right",
  });
  addText(slide, title, { left: 64, top: 48, width: 1150, height: 66 }, {
    fontSize: 36,
    bold: true,
    color: COLORS.navy,
    typeface: FONT_DISPLAY,
    wrap: "none",
  });
  addPageNumber(slide, page);
}

async function imageBytes(relativePath) {
  return fs.readFile(path.join(ASSETS, relativePath));
}

function contentType(relativePath) {
  const ext = path.extname(relativePath).toLowerCase();
  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  if (ext === ".svg") return "image/svg+xml";
  return "image/png";
}

async function addImage(slide, relativePath, position, options = {}) {
  return slide.images.add({
    blob: await imageBytes(relativePath),
    contentType: contentType(relativePath),
    alt: options.alt || path.basename(relativePath),
    fit: options.fit || "contain",
    geometry: options.geometry || "rect",
    borderRadius: options.borderRadius,
    crop: options.crop,
    position,
  });
}

function addDivider(slide, x, y, width) {
  addShape(slide, "rect", { left: x, top: y, width, height: 1 }, COLORS.line);
}

function addNumber(slide, number, x, y, color, size = 38) {
  addShape(slide, "ellipse", { left: x, top: y, width: size, height: size }, color);
  addText(slide, String(number), { left: x, top: y, width: size, height: size }, {
    fontSize: 18,
    bold: true,
    color: COLORS.white,
    alignment: "center",
  });
}

function addRightList(slide, items, options = {}) {
  const x = options.x || 735;
  const y = options.y || 205;
  const width = options.width || 465;
  const rowHeight = options.rowHeight || 116;
  const circleSize = options.circleSize || 40;
  const titleSize = options.titleSize || 22;
  const bodySize = options.bodySize || 16;
  const titleHeight = options.titleHeight || 32;
  const bodyTop = options.bodyTop || 34;
  const bodyHeight = options.bodyHeight || 48;
  items.forEach((item, index) => {
    const top = y + index * rowHeight;
    addNumber(slide, item.number || index + 1, x, top + 4, item.color, circleSize);
    addText(slide, item.title, { left: x + 54, top, width: width - 54, height: titleHeight }, {
      fontSize: titleSize,
      bold: true,
      color: COLORS.navy,
    });
    addText(slide, item.body, { left: x + 54, top: top + bodyTop, width: width - 54, height: bodyHeight }, {
      fontSize: bodySize,
      color: COLORS.muted,
      verticalAlignment: "top",
    });
    if (index < items.length - 1) addDivider(slide, x + 54, top + rowHeight - 8, width - 54);
  });
}

function addNotes(slide, notes) {
  slide.speakerNotes.textFrame.setText(notes);
  slide.speakerNotes.setVisible(true);
}

async function buildDeck() {
  const presentation = Presentation.create({ slideSize: { width: W, height: H } });

  // 1 — Title
  {
    const slide = presentation.slides.add();
    slide.background.fill = COLORS.navy;
    addTopBand(slide);
    addShape(slide, "rect", { left: 52, top: 39, width: 5, height: 28 }, COLORS.gold);
    addText(slide, "GEORGIA TECH", { left: 70, top: 36, width: 220, height: 36 }, {
      fontSize: 17,
      bold: true,
      color: COLORS.white,
    });
    addText(slide, "CSSE", { left: 64, top: 235, width: 520, height: 86 }, {
      fontSize: 58,
      bold: true,
      color: COLORS.white,
      typeface: FONT_DISPLAY,
    });
    addText(slide, "Your software engineering partner for reducing research risk through proportionate judgment", { left: 64, top: 330, width: 820, height: 108 }, {
      fontSize: 30,
      bold: true,
      color: "#F4C542",
      verticalAlignment: "top",
    });
    addText(slide, "Example engagement: iNaturalist × INQUIRE", { left: 64, top: 492, width: 620, height: 36 }, {
      fontSize: 18,
      bold: true,
      color: COLORS.white,
    });
    addPageNumber(slide, 1, true);
    addNotes(slide, "Frame CSSE as the engineering partner that makes research-software risk visible and manageable.");
  }

  // 2 — Harm
  {
    const slide = presentation.slides.add();
    addCardGridHeader(slide, {
      title: "THE HARM IS REAL: Software failures can change research outcomes",
      stage: "harm",
      page: 2,
    });
    const incidents = [
      ["news-coverage/fmri-wired.jpg", "False-positive rates reached 70%.", "fMRI inference", "WIRED · 2016"],
      ["news-coverage/genomics-nature.jpg", "Excel changed gene names into dates.", "Genomic data corruption", "NATURE · 2021"],
      ["news-coverage/code-scientific-data.png", "74% of tested R files failed initially.", "Shared code execution", "SCIENTIFIC DATA · 2022"],
      ["news-coverage/duke-nature.jpg", "Invalid predictors reached three trials.", "Clinical trial validation", "NATURE NEWS · 2011"],
      ["news-coverage/british-library.jpg", "Ransomware disrupted national collections.", "Research access outage", "NATURE · 2024"],
      ["news-coverage/ai-usenix.png", "Models invented 205,474 package names.", "AI dependency hallucination", "USENIX · 2025"],
    ];
    for (let index = 0; index < incidents.length; index += 1) {
      const col = index % 3;
      const row = Math.floor(index / 3);
      const left = 66 + col * 402;
      const top = 205 + row * 205;
      addShape(slide, "roundRect", { left, top, width: 370, height: 175 }, COLORS.white, COLORS.line, 1);
      await addImage(slide, incidents[index][0], { left: left + 12, top: top + 16, width: 92, height: 88 }, {
        alt: incidents[index][2],
        fit: "cover",
        geometry: "roundRect",
        borderRadius: "rounded-lg",
      });
      addText(slide, incidents[index][1], { left: left + 116, top: top + 8, width: 238, height: 54 }, {
        fontSize: 18,
        bold: true,
        color: COLORS.navy,
        verticalAlignment: "top",
      });
      addText(slide, `${incidents[index][2]}\n${incidents[index][3]}`, { left: left + 116, top: top + 66, width: 238, height: 42 }, {
        fontSize: 11,
        bold: true,
        color: COLORS.blue,
        verticalAlignment: "top",
      });
    }
    addNotes(slide, [
      "[Sources]",
      "- PNAS (2016), fMRI false-positive rates: https://doi.org/10.1073/pnas.1602413113",
      "- Scientific Data (2022), shared R file execution: https://doi.org/10.1038/s41597-022-01143-6",
      "- National Academies (2012), omics predictors in cancer trials: https://www.ncbi.nlm.nih.gov/books/NBK202172/",
      "",
      "Technical root-cause detail moved from the slide 2 cards:",
      "",
      "False-positive rates reached 70%.",
      "Software engineering root cause: Parametric cluster inference assumed Gaussian, stationary spatial noise that the data did not satisfy.",
      "",
      "Excel changed gene names into dates.",
      "Software engineering root cause: Excel’s automatic type conversion silently rewrote gene identifiers, with no schema validation.",
      "",
      "74% of tested R files failed initially.",
      "Software engineering root cause: Code embedded absolute paths and undeclared packages instead of a captured, tested runtime environment.",
      "",
      "Invalid predictors reached three trials.",
      "Software engineering root cause: An unvalidated analysis pipeline contained off-by-one indexing, label reversals, and data-alignment errors.",
      "",
      "Ransomware disrupted national collections.",
      "Software engineering root cause: Remote server access lacked MFA; legacy, tightly coupled systems slowed isolation and recovery.",
      "",
      "Models invented 205,474 package names.",
      "Software engineering root cause: Generated dependencies were not checked against package registries before code was presented or used.",
    ].join("\n"));
  }

  // 3 — Warning-sign questions
  {
    const slide = presentation.slides.add();
    addCardGridHeader(slide, {
      title: "Do ANY OF these WARNING SIGNS Sound Familiar?",
      stage: "hazard",
      page: 3,
    });
    const questions = [
      ["Can your team show evidence that the software can produce publishable results?", "Category: Correctness & validation", COLORS.orange],
      ["Can your team trace each result to its source data and transformations?", "Category: Data integrity & provenance", "#C9921E"],
      ["Can someone rerun the software without its original author?", "Category: Reproducibility & execution", "#0B5FAE"],
      ["Do simple workflow questions get complicated answers?", "Category: Dependency management & integration", "#2195A8"],
      ["Are software issues putting the research schedule behind?", "Category: Scale, reliability & security", COLORS.green],
      ["Do new research-group members face a long ramp-up?", "Category: Continuity & stewardship", COLORS.navy],
    ];
    questions.forEach((question, index) => {
      const col = index % 3;
      const row = Math.floor(index / 3);
      const left = 66 + col * 402;
      const top = 205 + row * 205;
      addShape(slide, "roundRect", { left, top, width: 370, height: 175 }, COLORS.white, COLORS.line, 1);
      addText(slide, `QUESTION ${index + 1}`, { left: left + 20, top: top + 18, width: 150, height: 24 }, {
        fontSize: 14,
        bold: true,
        color: question[2],
      });
      addText(slide, question[0], { left: left + 20, top: top + 48, width: 330, height: 70 }, {
        fontSize: 18,
        bold: true,
        color: COLORS.navy,
        verticalAlignment: "top",
      });
      addText(slide, question[1], { left: left + 20, top: top + 128, width: 330, height: 40 }, {
        fontSize: 15,
        bold: true,
        color: "#5F6F82",
        verticalAlignment: "top",
      });
    });
    addNotes(slide, `The six numbered categories carry directly into the next slide. Research teams retain ownership of questions, assumptions, methods, and interpretation.

Full root-cause discussion guide moved from the slide:

1. Question: Do you get a clear, evidence-backed answer when you ask if this software can generate publishable results?
Listen for: Assumptions your team cannot independently check.
What it may signal: Correctness & validation gaps.
Why it matters: Code can shape results.

2. Question: Can your team trace each result to its source data and transformations?
Listen for: Manual steps, unclear lineage, or conflicting versions.
What it may signal: Lack of data integrity & provenance.
Why it matters: Data changes across tools.

3. Question: Can another member of your group rerun the software without its original author?
Listen for: Laptop-specific setup or undocumented steps.
What it may signal: Difficult to reproduce results / execution.
Why it matters: The work must run beyond one laptop.

4. Question: Do simple workflow questions get long, complicated answers from your team?
Listen for: Brittle integrations and hidden dependencies.
What it may signal: Shorthanded dependency management & integration.
Why it matters: External systems change.

5. Question: Are software issues putting your research schedule behind?
Listen for: Recurring failures, slow runs, access, or recovery problems.
What it may signal: Lack of consideration for scale, reliability & security.
Why it matters: Use and volume grow.

6. Question: Do new members of your research group face a long ramp-up?
Listen for: Knowledge concentrated in one person or unclear ownership.
What it may signal: Myopic continuity & stewardship.
Why it matters: People and funding change.

Escalation guidance: Students and researchers should not have to solve system-level engineering problems alone. Consider engineering support when answers are unclear or depend on one person, one laptop, or fragile tooling.`);
  }

  // 4 — Matching response
  {
    const slide = presentation.slides.add();
    addHeader(slide, {
      title: "CSSE protects the research outcome not just the software.",
      subtitle: "Researchers own the science. CSSE makes software risk visible, controlled, and testable at the level the work actually needs.",
      stage: "control",
      stageLabel: "CSSE VALUE",
      page: 4,
      titleSize: 35,
    });
    await addImage(slide, "generated/csse-judgment.png", { left: 55, top: 245, width: 555, height: 285 }, { alt: "Scientific discovery connected to durable software through engineering judgment" });
    addRightList(slide, [
      { number: 1, title: "Conclusions withstand scrutiny", body: "Validate consequential code paths, assumptions, and outputs.", color: COLORS.orange },
      { number: 2, title: "Every result remains traceable", body: "Preserve provenance from source data through every transformation.", color: "#C89B2B" },
      { number: 3, title: "Others can rerun the work", body: "Capture environments, dependencies, data, and execution steps.", color: COLORS.blue },
      { number: 4, title: "Workflows stay understandable", body: "Document interfaces, integrations, packages, APIs, and failure modes.", color: "#1E8A9E" },
      { number: 5, title: "Software stops disrupting research", body: "Right-size performance, security, access, recovery, and scale.", color: COLORS.green },
      { number: 6, title: "Capability survives turnover", body: "Clarify ownership, maintenance, operations, and handoff.", color: COLORS.navy },
    ], {
      x: 650,
      y: 188,
      width: 550,
      rowHeight: 74,
      circleSize: 34,
      titleSize: 19,
      bodySize: 14,
      titleHeight: 26,
      bodyTop: 27,
      bodyHeight: 34,
    });
    addNotes(slide, `The matching markers answer each category from Slide 3. AI can accelerate implementation, but it does not own research context, accountability, or sufficiency of evidence.

Value-proposition talk track:
Researchers retain ownership of the scientific questions, assumptions, methods, and interpretation. CSSE supplies the engineering judgment that makes consequential software risk visible, controlled, and testable.

The value is not more code. It is confidence that the research outcome can withstand scrutiny, be traced and rerun, remain understandable as dependencies change, keep moving under real-world use, and survive turnover.

The six numbered outcomes directly answer the six categories on slide 3.

Transition to the case: “Now let’s show what this looks like in a real engagement—iNaturalist.”`);
  }

  // 5 — Pilot risks
  {
    const slide = presentation.slides.add();
    addHeader(slide, {
      title: "Can INQUIRE-style semantic search work at iNaturalist scale?",
      subtitle: "The general warning signs become testable questions in the iNaturalist × INQUIRE pilot.",
      stage: "hazard",
      page: 5,
    });
    await addImage(slide, "generated/inquire-risks.png", { left: 58, top: 205, width: 640, height: 390 }, { alt: "Biodiversity image search facing consistency, freshness, and growth risks" });
    addRightList(slide, [
      { title: "Will search stay consistent?", body: "Correctness + reproducibility • Slide 3: Q1 + Q3", color: COLORS.orange },
      { title: "Will new data stay fresh?", body: "Provenance + integration • Slide 3: Q2 + Q4", color: COLORS.blue },
      { title: "Can the workflow scale?", body: "Scale + reliability • Slide 3: Q5", color: COLORS.green },
    ], { x: 735, y: 230, width: 460, rowHeight: 125 });
    addNotes(slide, `iNaturalist provides the motivating scale; INQUIRE provides the expert-query evaluation setting. The 300M+ figure describes broader iNaturalist context, not the pilot collection.

Question-led case-study framing:
Original title: CSSE identified the risks that matter for this pilot
Original statement: The engagement applies INQUIRE’s expert-query approach to iNaturalist’s 300M+ observations.
Presenter cue: The question is not whether every conceivable risk exists. It is which risks could invalidate the pilot’s research value. The three numbered risks are the bounded answer.

Pilot framing clarification:
This is an iNaturalist × INQUIRE pilot. The challenge is to take INQUIRE-style expert-guided semantic search to iNaturalist scale.

The three numbered risks are intentionally framed as questions the pilot must answer. Original risk labels: Search consistency; Search freshness; Controlled growth.

Correlation to slide 3:
1. Will search stay consistent? → Correctness & validation (Q1) + Reproducibility & execution (Q3).
   Detailed risk explanation: Weak rankings can shape interpretation; new data can skew results.
2. Will new data stay fresh? → Data integrity & provenance (Q2) + Dependency management & integration (Q4).
   Detailed risk explanation: New observations must enter the index quickly and predictably.
3. Can the workflow scale? → Scale, reliability & security (Q5).
   Detailed risk explanation: Increasing volume should not require rebuilding the workflow.

The remaining warning sign—Continuity & stewardship (Q6)—is surfaced on slide 8.`);
  }

  // 6 — Controls
  {
    const slide = presentation.slides.add();
    addHeader(slide, {
      title: "What controls are proportionate to those risks?",
      subtitle: "CSSE tied one practical control to each risk—without prematurely building a production service.",
      stage: "control",
      page: 6,
    });
    await addImage(slide, "generated/inquire-controls.png", { left: 58, top: 210, width: 650, height: 370 }, { alt: "Biodiversity search moving through quality, refresh, and growth controls" });
    addRightList(slide, [
      { title: "Keep search consistent", body: "Use fixed queries, rankings, metrics, and thresholds.", color: COLORS.orange },
      { title: "Keep results fresh", body: "Append data, refresh the index, and preserve source context.", color: COLORS.blue },
      { title: "Grow without rebuilding", body: "Use repeatable batches, measured behavior, and recovery paths.", color: COLORS.green },
    ], { x: 735, y: 230, width: 460, rowHeight: 125 });
    addNotes(slide, `These are pilot controls. Production SLOs, full-scale resilience, and operational hardening remain deferred until evidence justifies the investment.

Question-led case-study framing:
Original title: CSSE right-sized controls to the selected risks
Original statement: Enough control for a credible pilot without prematurely building a production service.
Presenter cue: Walk the audience from each numbered risk on slide 5 to the matching numbered control here. Emphasize proportionality: credible evidence now, production hardening only when justified.`);
  }

  // 7 — Evidence
  {
    const slide = presentation.slides.add();
    addHeader(slide, {
      title: "CSSE Team ensured that there was evidence that these controls worked",
      subtitle: "The results established a repeatable baseline not production readiness.",
      stage: "evidence",
      page: 7,
    });
    await addImage(slide, "generated/evidence-boundary.png", { left: 60, top: 215, width: 650, height: 360 }, { alt: "Prototype evidence supporting a pilot with production beyond the evidence boundary" });
    addRightList(slide, [
      { title: "Quality changes are detectable", body: "0.72 P@10 and 0.81 NDCG@10 create a repeatable baseline.", color: COLORS.orange },
      { title: "The refresh path works", body: "24 → 48 vectors; appended data became searchable.", color: COLORS.blue },
      { title: "Runtime remains measurable", body: "418 ms p95; behavior and recovery can be evaluated.", color: COLORS.green },
    ], { x: 735, y: 230, width: 460, rowHeight: 125 });
    addNotes(slide, `[Sources]
- Checked-in benchmark evidence: data/evidence/benchmark-summary.json
The values are limited-demo evidence, not production service-level objectives.

Question-led case-study framing:
Original title: Pilot evidence does not establish production readiness
Original statement: CSSE defines what the evidence can support and prevents the team from overclaiming.
Presenter cue: Use the three measured results to answer the question precisely. They support a repeatable pilot baseline; they do not support a production-readiness claim.`);
  }

  // 8 — Team
  {
    const slide = presentation.slides.add();
    addHeader(slide, {
      title: "CSSE Team",
      subtitle: "Leadership, engineering, and operations carry the controls beyond the pilot.\nContinuity + stewardship • Slide 3: Q6",
      stage: "team",
      page: 8,
    });
    addText(slide, "LEADERSHIP", { left: 95, top: 195, width: 350, height: 28 }, { fontSize: 14, bold: true, color: COLORS.gold });
    addDivider(slide, 95, 228, 350);
    addText(slide, "ENGINEERING + OPERATIONS", { left: 515, top: 195, width: 650, height: 28 }, { fontSize: 14, bold: true, color: COLORS.blue });
    addDivider(slide, 515, 228, 650);

    const people = [
      { name: "Rich Vuduc", role: "SSE Co-director", x: 125, asset: "team/rich-vuduc.png", color: COLORS.gold },
      { name: "Jeffrey Young", role: "SSE Co-director", x: 305, asset: "team/jeffrey-young.png", color: COLORS.gold },
      { name: "Dave Brownell", role: "Head of Engineering", x: 515, asset: "team/dave-brownell.png", color: COLORS.orange },
      { name: "Ketan Bhardwaj", role: "Senior RSE", x: 685, asset: "team/ketan-bhardwaj.png", color: COLORS.orange },
      { name: "Robert Bates", role: "Senior RSE", x: 855, asset: "team/robert-bates.png", color: COLORS.orange },
      { name: "Nirvana Edwards", role: "Programs & Ops", x: 1025, asset: "team/nirvana-edwards.png", color: COLORS.orange },
    ];
    for (const person of people) {
      addShape(slide, "ellipse", { left: person.x - 4, top: 253, width: 108, height: 108 }, COLORS.white, person.color, 3);
      await addImage(slide, person.asset, { left: person.x, top: 257, width: 100, height: 100 }, {
        alt: person.name,
        fit: "cover",
        geometry: "ellipse",
      });
      addText(slide, person.name, { left: person.x - 30, top: 375, width: 160, height: 28 }, { fontSize: 17, bold: true, color: COLORS.navy, alignment: "center" });
      addText(slide, person.role, { left: person.x - 30, top: 405, width: 160, height: 24 }, { fontSize: 13, color: COLORS.muted, alignment: "center" });
    }

    addText(slide, "A multidisciplinary team brings the right capability at the right stage of a research engagement.", { left: 95, top: 472, width: 1070, height: 34 }, { fontSize: 18, bold: true, color: COLORS.navy, alignment: "center" });
    const capabilities = ["Software engineering", "Architecture", "Product + program", "UI/UX", "Technical writing"];
    capabilities.forEach((capability, index) => {
      const left = 95 + index * 214;
      addText(slide, capability, { left, top: 535, width: 190, height: 40 }, { fontSize: 15, bold: true, color: COLORS.blue, alignment: "center" });
      if (index < capabilities.length - 1) addShape(slide, "rect", { left: left + 201, top: 546, width: 1, height: 18 }, COLORS.line);
    });
    addNotes(slide, `[Sources]
- GT CSSE people roster and headshots: https://ssecenter.cc.gatech.edu/people/

Question-led case-study framing:
Original title: The team behind the controls
Original statement: Leadership, engineering, and operations make the controls durable beyond a single project.
Presenter cue: Connect the question to the operating model: leadership frames the research obligation; engineering and operations turn it into durable practice and handoff.

Correlation to slide 3:
The team question closes the remaining general warning sign: Continuity & stewardship (Q6). Leadership, engineering, operations, and handoff practices prevent the capability from depending on one original author or one project team.`);
  }

  // 9 — Close
  {
    const slide = presentation.slides.add();
    slide.background.fill = COLORS.navy;
    addTopBand(slide);
    addText(slide, "Protect the research outcome before software risk compounds.", { left: 70, top: 70, width: 1040, height: 110 }, {
      fontSize: 43,
      bold: true,
      color: COLORS.white,
      typeface: FONT_DISPLAY,
      verticalAlignment: "top",
    });
    const steps = [
      ["1", "Surface the hazard", "Where could assumptions or software fail?", COLORS.gold],
      ["2", "Name the harm", "What could the research program lose?", COLORS.orange],
      ["3", "Choose the control", "Apply proportionate engineering.", COLORS.gold],
      ["4", "Prove it works", "Use evidence to test effectiveness.", COLORS.blue],
      ["5", "Protect the outcome", "Trustworthy, reproducible, durable work.", COLORS.green],
    ];
    steps.forEach((step, index) => {
      const left = 64 + index * 240;
      addShape(slide, "rect", { left, top: 260, width: 205, height: 4 }, step[3]);
      addText(slide, step[0], { left, top: 282, width: 40, height: 40 }, { fontSize: 24, bold: true, color: step[3] });
      addText(slide, step[1], { left, top: 334, width: 205, height: 54 }, { fontSize: 21, bold: true, color: COLORS.white, verticalAlignment: "top" });
      addText(slide, step[2], { left, top: 400, width: 205, height: 80 }, { fontSize: 16, color: "#D9E2E8", verticalAlignment: "top" });
    });
    addText(slide, "Start with one consequential workflow. CSSE will help define the risk, the right-sized control, and the evidence needed to proceed.", { left: 70, top: 565, width: 1080, height: 56 }, {
      fontSize: 21,
      bold: true,
      color: "#F4C542",
    });
    addPageNumber(slide, 9, true);
    addNotes(slide, "[Sources]\n- UK CAA Bowtie method: https://www.caa.co.uk/safety-initiatives/working-with-industry/bowtie/about-bowtie/how-does-bowtie-work/\n- Office of Rail and Road, controls and assurance: https://www.orr.gov.uk/guidance-compliance/rail/health-safety/occupational-health/good-practice/health-risk-management-assurance");
  }

  // 10 — Backup divider
  {
    const slide = presentation.slides.add();
    slide.background.fill = COLORS.navy;
    addTopBand(slide);
    addText(slide, "Backup", { left: 0, top: 270, width: W, height: 80 }, { fontSize: 54, bold: true, color: COLORS.white, alignment: "center", typeface: FONT_DISPLAY });
    addText(slide, "Supporting information for discussion", { left: 0, top: 352, width: W, height: 36 }, { fontSize: 18, color: COLORS.white, alignment: "center" });
    addPageNumber(slide, 10, true);
  }

  // 11 — Public record
  {
    const slide = presentation.slides.add();
    addHeader(slide, {
      title: "Alternative: the public record",
      subtitle: "Observed harms span validity, reproducibility, continuity, and AI-assisted development.",
      stage: "evidence",
      page: 11,
    });
    const cases = [
      ["generated/public-evidence-blocks/fmri.png", "fMRI inference", "False-positive rates reached 70%.", "PNAS · 2016"],
      ["generated/public-evidence-blocks/genomic-data.png", "Genomic data", "Excel converted gene names to dates.", "PLOS · 2021"],
      ["generated/public-evidence-blocks/shared-code.png", "Shared code", "74% of R files failed their first run.", "SCIENTIFIC DATA · 2022"],
      ["generated/public-evidence-blocks/clinical-trials.png", "Clinical trials", "Invalid predictors reached three trials.", "IOM · 2012"],
      ["generated/public-evidence-blocks/research-access.png", "Research access", "Ransomware blocked digital systems.", "BRITISH LIBRARY · 2024"],
      ["generated/public-evidence-blocks/ai-dependencies.png", "AI dependencies", "Models invented 205,474 packages.", "SPRACKLEN ET AL. · 2024"],
    ];
    for (let index = 0; index < cases.length; index += 1) {
      const col = index % 3;
      const row = Math.floor(index / 3);
      const left = 66 + col * 402;
      const top = 205 + row * 205;
      addShape(slide, "roundRect", { left, top, width: 370, height: 170 }, COLORS.white, COLORS.line, 1);
      await addImage(slide, cases[index][0], { left: left + 16, top: top + 20, width: 122, height: 122 }, { alt: cases[index][1], geometry: "ellipse", fit: "cover" });
      addText(slide, cases[index][1], { left: left + 154, top: top + 24, width: 195, height: 32 }, { fontSize: 19, bold: true, color: COLORS.navy });
      addText(slide, cases[index][2], { left: left + 154, top: top + 60, width: 195, height: 48 }, { fontSize: 15, color: COLORS.muted, verticalAlignment: "top" });
      addText(slide, cases[index][3], { left: left + 154, top: top + 119, width: 195, height: 20 }, { fontSize: 10, bold: true, color: COLORS.blue });
    }
    addNotes(slide, "[Sources]\n- PNAS 2016; PLOS 2021; Scientific Data 2022; IOM 2012; British Library 2024; Spracklen et al. 2024. Full URLs are preserved in the Marp source notes.");
  }

  // 12 — Retractions
  {
    const slide = presentation.slides.add();
    addHeader(slide, {
      title: "Backup: software errors that led to retractions",
      subtitle: "Small defects can erase conclusions across climate, health, psychology, and social science.",
      stage: "harm",
      page: 12,
    });
    const cases = [
      ["generated/retraction-cases/climate-code.png", "Climate · analysis code", "A faulty model created an apparent species shift."],
      ["generated/retraction-cases/long-covid-data.png", "Child health · data processing", "Long-COVID incidence was understated."],
      ["generated/retraction-cases/fake-news-model.png", "Social media · software + data", "A fake-news conclusion became unsupported."],
      ["generated/retraction-cases/psychology-script.png", "Psychology · experiment script", "A script error invalidated experimental effects."],
      ["generated/retraction-cases/epa-coding.png", "Environmental justice · data coding", "Reversed values voided the EPA analysis."],
      ["generated/retraction-cases/cancer-code.png", "Cancer research · program logic", "One faulty line caused a study retraction."],
    ];
    for (let index = 0; index < cases.length; index += 1) {
      const col = index % 3;
      const row = Math.floor(index / 3);
      const left = 66 + col * 402;
      const top = 205 + row * 205;
      addShape(slide, "roundRect", { left, top, width: 370, height: 178 }, COLORS.white, COLORS.line, 1);
      await addImage(slide, cases[index][0], { left, top, width: 370, height: 92 }, { alt: cases[index][1], fit: "cover", geometry: "roundRect", borderRadius: "rounded-lg" });
      addText(slide, cases[index][1].toUpperCase(), { left: left + 16, top: top + 101, width: 338, height: 18 }, { fontSize: 10, bold: true, color: COLORS.blue });
      addText(slide, cases[index][2], { left: left + 16, top: top + 123, width: 338, height: 42 }, { fontSize: 16, bold: true, color: COLORS.navy, verticalAlignment: "top" });
    }
    addNotes(slide, "[Sources]\n- Retraction Watch case reports listed in the Marp source notes for this slide.");
  }

  // 13 — Backup hazard map
  {
    const slide = presentation.slides.add();
    addHeader(slide, {
      title: "Backup: additional condition-to-hazard mappings",
      subtitle: "Use only the examples that fit the research context under discussion.",
      stage: "hazard",
      page: 13,
    });
    await addImage(slide, "generated/backup-hazards.png", { left: 280, top: 190, width: 720, height: 390 }, { alt: "Six research-software conditions and their hazards" });
    const labels = [
      ["Changing dependencies", "Environment drift breaks workflows."],
      ["Growing scale", "Data and users stress brittle pipelines."],
      ["Fragmented ownership", "No one owns maintenance and handoff."],
    ];
    labels.forEach((label, index) => {
      const left = 85 + index * 400;
      addText(slide, label[0], { left, top: 590, width: 330, height: 28 }, { fontSize: 18, bold: true, color: COLORS.navy, alignment: "center" });
      addText(slide, label[1], { left, top: 619, width: 330, height: 30 }, { fontSize: 14, color: COLORS.muted, alignment: "center" });
    });
    addNotes(slide, "Alternative risk prompts for tailoring the discussion. These are not a one-to-one replacement for the six main-story categories on Slide 3.");
  }

  await fs.mkdir(QA_DIR, { recursive: true });
  for (const [index, slide] of presentation.slides.items.entries()) {
    const stem = `slide-${String(index + 1).padStart(2, "0")}`;
    const png = await presentation.export({ slide, format: "png", scale: 1 });
    await fs.writeFile(path.join(QA_DIR, `${stem}.png`), new Uint8Array(await png.arrayBuffer()));
    const layout = await slide.export({ format: "layout" });
    await fs.writeFile(path.join(QA_DIR, `${stem}.layout.json`), await layout.text());
  }
  const montage = await presentation.export({ format: "webp", montage: true, scale: 1 });
  await fs.writeFile(path.join(QA_DIR, "montage.webp"), new Uint8Array(await montage.arrayBuffer()));

  const pptx = await PresentationFile.exportPptx(presentation);
  await pptx.save(OUTPUT);
  console.log(`Exported native editable PowerPoint ${OUTPUT}`);
}

buildDeck().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
