---
marp: true
theme: default
paginate: true
size: 16:9
title: CSSE Director View — Reducing Research Software Risk
description: Director-level case for reducing research software risk, using iNaturalist x INQUIRE as evidence
style: |
  :root {
    --font-sans: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
    --font-condensed: "Roboto Condensed", "Arial Narrow", Arial, sans-serif;
    --font-serif: "Roboto Slab", Georgia, "Times New Roman", serif;
    --navy: #003057;
    --blue: #004f9f;
    --gold: #b3a369;
    --orange: #f95e10;
    --green: #216e4e;
    --ink: #18222d;
    --muted: #586574;
    --surface: #ffffff;
    --paper: #f7f8f3;
    --line: #d8dfd5;
    --soft-orange: #fff0e5;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    background:
      linear-gradient(90deg, var(--gold), var(--orange), var(--green), var(--blue)) top / 100% 7px no-repeat,
      linear-gradient(135deg, rgba(255,255,255,0.98), rgba(247,248,243,0.92)),
      var(--paper);
    color: var(--ink);
    font-family: var(--font-sans);
    padding: 54px 72px 48px;
  }

  section::after {
    content: attr(data-marpit-pagination) !important;
    position: absolute !important;
    inset: auto 34px 28px auto !important;
    min-width: 30px !important;
    height: 30px !important;
    display: inline-grid !important;
    place-items: center !important;
    border: 1px solid rgba(0, 48, 87, 0.16);
    border-radius: 999px !important;
    background: rgba(255,255,255,0.82);
    color: var(--navy);
    padding: 0 !important;
    font-size: 14px !important;
    font-weight: 900 !important;
    line-height: 1 !important;
  }

  h1,
  h2,
  h3 {
    margin: 0;
    color: var(--navy);
    letter-spacing: 0;
  }

  h1 {
    max-width: 1080px;
    font-family: var(--font-serif);
    font-size: 72px;
    line-height: 0.98;
  }

  h2 {
    margin-bottom: 24px;
    font-family: var(--font-condensed);
    font-size: 44px;
    line-height: 1.05;
    font-weight: 900;
  }

  h3 {
    margin: 10px 0 8px;
    font-family: var(--font-condensed);
    font-size: 27px;
    font-weight: 900;
  }

  p {
    max-width: 900px;
    margin: 0 0 19px;
    color: var(--muted);
    font-size: 26px;
    line-height: 1.34;
    font-weight: 650;
  }

  strong {
    color: var(--navy);
    font-weight: 900;
  }

  a {
    color: var(--blue);
    text-decoration: none;
    font-weight: 850;
  }

  code {
    border: 1px solid rgba(0,48,87,0.15);
    border-radius: 6px;
    background: rgba(255,255,255,0.76);
    color: var(--navy);
    padding: 2px 7px;
    font-size: 0.78em;
    font-weight: 850;
  }

  ul {
    display: grid;
    gap: 10px;
    margin: 16px 0 0;
    padding: 0;
  }

  li {
    position: relative;
    list-style: none;
    border: 1px solid rgba(0,48,87,0.13);
    border-radius: 8px;
    background: rgba(255,255,255,0.86);
    padding: 10px 16px 10px 42px;
    color: var(--navy);
    font-size: 23px;
    line-height: 1.25;
    font-weight: 760;
  }

  li::before {
    content: "";
    position: absolute;
    left: 17px;
    top: 20px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--orange);
    box-shadow: 0 0 0 5px var(--soft-orange);
  }

  table {
    width: 100%;
    margin: 12px 0 0;
    border-collapse: collapse;
    table-layout: fixed;
    overflow: hidden;
    border: 1px solid rgba(0,48,87,0.13);
    border-radius: 8px;
    background: rgba(255,255,255,0.88);
  }

  th,
  td {
    border-bottom: 1px solid rgba(0,48,87,0.11);
    height: 62px;
    padding: 8px 12px;
    text-align: left;
    vertical-align: top;
    font-size: 18px;
    line-height: 1.18;
  }

  th {
    background: var(--navy);
    color: var(--surface);
    height: 34px;
    font-size: 14px;
    font-weight: 900;
    text-transform: uppercase;
  }

  td {
    color: var(--navy);
    font-weight: 730;
  }

  tr:last-child td {
    border-bottom: 0;
  }

  blockquote {
    margin: 18px 0 0;
    border-left: 6px solid var(--gold);
    border-radius: 0 8px 8px 0;
    background: rgba(255,255,255,0.78);
    padding: 9px 14px;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.28;
    font-weight: 700;
  }

  blockquote p {
    margin: 0;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.28;
  }

  img {
    max-width: 100%;
  }

  section.title {
    justify-content: flex-end;
    background:
      linear-gradient(90deg, var(--gold), var(--orange), var(--green), var(--blue)) top / 100% 7px no-repeat,
      #001d33;
    padding: 56px 72px 66px;
  }

  section.title h1,
  section.title h2,
  section.title p,
  section.title strong {
    color: #ffffff;
  }

  section.title h1 {
    margin-top: 170px;
    font-size: 88px;
  }

  section.title h2 {
    margin-top: 4px;
    margin-bottom: 18px;
    color: #ffcf5f;
    font-size: 52px;
  }

  section.title p {
    max-width: 790px;
    color: rgba(255,255,255,0.9);
    font-size: 30px;
  }

  section.title img:not(.marpit-background) {
    position: absolute;
    top: 54px;
    left: 72px;
  }

  table td:first-child {
    font-weight: 900;
  }

  table th:first-child,
  table td:first-child {
    width: 16%;
  }

  section.cta table th,
  section.cta table td {
    width: 25%;
  }

  section.risk table th:first-child,
  section.risk table td:first-child {
    width: 22%;
  }

  section.risk table th:nth-child(2),
  section.risk table td:nth-child(2) {
    width: 37%;
  }

  section.mitigate table th:first-child,
  section.mitigate table td:first-child {
    width: 28%;
  }

  section.value table th:first-child,
  section.value table td:first-child {
    width: 19%;
  }

  section.value table th:nth-child(2),
  section.value table td:nth-child(2) {
    width: 29%;
  }

  section.risk p,
  section.mitigate p,
  section.value p {
    max-width: 1080px;
  }

  section.demo {
    padding-right: 520px;
    background:
      linear-gradient(90deg, var(--gold), var(--orange), var(--green), var(--blue)) top / 100% 7px no-repeat,
      url("assets/director-outline/inquire-tasks.png") right 34px center / 500px auto no-repeat,
      linear-gradient(135deg, rgba(255,255,255,0.98), rgba(247,248,243,0.92)),
      var(--paper);
  }

  section.demo p {
    max-width: 560px;
  }

  section.demo h2 {
    width: calc(100% + 420px);
    max-width: 1080px;
  }

  section.demo li {
    font-size: 20px;
  }

  section.team {
    display: grid;
    place-items: center;
    padding: 22px 42px 18px;
    background: #f7f8f3;
  }

  section.team p {
    margin: 0;
  }

  section.team blockquote {
    position: absolute;
    left: 52px;
    bottom: 28px;
    margin: 0;
    max-width: 720px;
    font-size: 15px;
  }

  section.team blockquote p {
    font-size: 15px;
  }

  section.cta h1 {
    max-width: 1140px;
    margin-bottom: 20px;
    font-size: 56px;
    line-height: 1.02;
  }

  section.cta p {
    max-width: 960px;
    margin-top: 28px;
    color: var(--navy);
    font-size: 34px;
    line-height: 1.22;
    font-weight: 850;
  }

---

<!-- _class: title -->

![w:240](assets/director-outline/gt-logo-oneline-white.svg)

# CSSE

## A Director's View

Reducing software-related research risk through rigorous, inspectable engineering.

**Example engagement: iNaturalist x INQUIRE**

---

<!-- _class: risk -->

## When Research Depends on Software, Software Quality Becomes Research Risk

| Potential Harm | Software Hazard | Research Consequence |
| --- | --- | --- |
| Incorrect conclusions | Incorrect behavior or evaluation at limited scales | Findings or decisions rest on unreliable output |
| Unreproducible results | Software tied to one person, dataset, or environment | Others cannot independently rerun or verify the work |
| Wasted investment | Brittle software that is difficult to extend or operate | Time and funding are spent rebuilding instead of researching |
| Loss of trust | Missing provenance, evidence, or visible quality controls | Confidence in the research program is damaged |

---

<!-- _class: mitigate -->

## CSSE Introduces Controls Before Hazards Become Harms

The objective is not more process. It is more trustworthy research and more defensible investment decisions.

| Engineering Control | What It Changes | Evidence A Director Can Ask For |
| --- | --- | --- |
| Evaluation and quality gates | Incorrect behavior is more likely to be detected before use | Benchmarks, thresholds, review criteria |
| Provenance and reproducible workflows | Results are easier to trace, rerun, and verify | Source records, scripts, environments, run summaries |
| Modular architecture and documented interfaces | Change and reuse carry less cost and uncertainty | Contracts, tests, architecture decisions |
| Metrics, runbooks, and recovery paths | Failures become visible and their consequences are contained | Operational signals, validation, fallback evidence |

> CSSE reduces avoidable software-related risk; it does not eliminate scientific uncertainty.

---

<!-- _class: example -->

## Example: iNaturalist x INQUIRE Engagement

**Research goal:** support natural-language semantic search over fast-growing biodiversity imagery.

- iNaturalist has reached **300M observations** and continues to grow.
- INQUIRE frames the retrieval challenge around **250 expert ecological queries** over **5M iNat24 images**.
- Hazards to manage included untraceable results, weakly evaluated retrieval, unable to absorb fresh data at scale and reasonable cost.
- CSSE built a bounded, inspectable path from source data through ingestion, embeddings, vector search, and evaluation highlighting cost performance trade-offs.

> Public context: [iNaturalist's 300M milestone](https://www.inaturalist.org/blog/126478); [INQUIRE benchmark paper](https://papers.nips.cc/paper_files/paper/2024/file/e4ad9c75f0d60ed75700f020adb3f705-Paper-Datasets_and_Benchmarks_Track.pdf).

---

<!-- _class: demo -->

## Live Demo / Video (Optional)

The demo makes the risk-reducing controls visible—not just the search result.

- **Controlled change:** ingest batch 1, search, append batch 2, and rerun the same query.
- **Observable state:** the collection grows from `24` to `48` vectors.
- **Traceable results:** inspect scores, source URLs, licenses, object keys, and dimensions.
- **Repeatable workflow:** scripts and runtime summaries preserve how the result was produced.
- **Cost trade-offs:** estimated cost performance of different technologies for deployment at scale.

> Fallback path: captured evidence shows the same before/after workflow if the live system is not available.

---

<!-- _class: value -->

## Evidence That Risk-Reducing Controls Exist

| Hazard Addressed | Evidence From This Engagement | What The Evidence Supports |
| --- | --- | --- |
| Untraceable results | Dataset IDs, source URLs, licenses, dimensions, and object keys | A reviewer can connect a result to its source |
| Unevaluated retrieval | 50-query benchmark: **0.72 P@10**, **0.81 NDCG@10** | Retrieval quality is tested rather than assumed |
| Unknown scale behavior | **37.8 images/sec** ingest; **418 ms** p95 search | Performance has been measured on a bounded evidence set |
| Fragile operation | Scripts, tests, metrics, checkpoint resume, DLQ recovery, and runbook | The workflow can be rerun, inspected, and recovered |
| Untenable deployment cost | Different database, indexing technologies benchmarked for the workflow | The workflow cost in deployment can extrapolated from the benchmark|

> Captured demo evidence, not production SLOs or a quantified claim of risk reduction.

---

<!-- _class: team -->

![w:1110](assets/director-outline/csse-team-capabilities.png)

> Team roster and source images: [ssecenter.cc.gatech.edu/people](https://ssecenter.cc.gatech.edu/people/)

---

<!-- _class: cta -->

# Make the Next Software Investment a Risk-Informed Decision.

| Identify Harm | Expose Hazards | Require Evidence | Choose The Target |
| --- | --- | --- | --- |
| What research, funding, or trust must be protected? | Where could software contribute to failure? | What controls and quality gates must be inspectable? | Validated prototype, hosted pilot, or managed service? |

Bring CSSE in early—before avoidable software hazards become research harms.
