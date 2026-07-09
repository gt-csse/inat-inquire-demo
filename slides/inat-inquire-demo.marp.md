---
marp: true
theme: default
paginate: true
size: 16:9
title: CSSE Director View
description: Director-level CSSE overview using the iNaturalist x INQUIRE engagement as a proof point
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

From research software risk to measurable, inspectable outcomes.

**Example engagement: iNaturalist x INQUIRE**

---

<!-- _class: risk -->

## Software Risks in Scientific Research

Research software risk is often invisible until a team tries to use it beyond the prototype.

| Risk | What It Looks Like | Director Impact |
| --- | --- | --- |
| Intangible outcomes | Demo code, notebooks, or one-off scripts that do not transfer into operation | Hard to fund, evaluate, or reuse |
| Unclear impact | Users cannot tell whether the software improves the research workflow | Adoption and stakeholder trust stall |
| Low quality | Fragile pipelines, missing provenance, weak tests, no scale path | Reproducibility and sustainability become unfunded liabilities |

---

<!-- _class: mitigate -->

## GT CSSE Mitigates Software Risks

CSSE turns research ambition into software evidence a sponsor can inspect.

| Tangible Outcomes | Real Impact | Production Quality |
| --- | --- | --- |
| Working systems, not just diagrams | Workflow evidence tied to scientific use | Source traceability, tests, metrics, and runbooks |
| Clear artifacts for PIs, RSEs, and directors | Usability, maintainability, and operational fit | Reproducibility, scalability, and reviewable architecture |
| Portfolio proof points across engagements | A basis for the next investment decision | A credible path from local proof to managed service |

> Project portfolio: [gt-csse.github.io/project-showcase](https://gt-csse.github.io/project-showcase/#/projects)

---

<!-- _class: example -->

## Example: iNaturalist x INQUIRE Engagement

**Risk:** support natural-language semantic search over fast-growing biodiversity imagery.

- iNaturalist has reached **300M observations** and continues to grow.
- INQUIRE frames the retrieval challenge around **250 expert ecological queries** over **5M iNat24 images**.
- Fresh data, provenance, retrieval quality, and scale all have to be visible.
- CSSE delivered a path that connects ingestion, embeddings, vector search, metrics, and review artifacts.

> Public context: iNaturalist milestone blog, March 20, 2026; INQUIRE benchmark site.

---

<!-- _class: demo -->

## Live Demo / Video

The demo makes the risk visible as an operating workflow, not a static claim.

- Start with a bounded collection and run a natural-language query.
- Append a new batch without rebuilding the system.
- Rerun the same query and inspect changed ranked results.
- Review scores, latency, source URLs, object keys, dimensions, and evidence artifacts.

> Fallback path: captured evidence shows the same before/after workflow if the live system is not available.

---

<!-- _class: value -->

## GT CSSE Delivered Value

| Dimension | Evidence From This Engagement | Why It Matters |
| --- | --- | --- |
| Outcome | FastAPI search, Ray ingestion, Qdrant vectors, SigLIP2/Infinity embeddings; source metadata preserved | Turns a research retrieval idea into a sponsor-visible workflow |
| Impact | **20,000** vectors; **37.8 images/sec** ingest; **418 ms** p95 search; **41%** cache-hit signal | Grounds the demo in scale and performance evidence |
| Quality | 50-query benchmark, Prometheus metrics, checkpoint resume, DLQ replay, quality gates | Makes retrieval behavior and operations reviewable |
| Resources and timeline |  |  |

> Evidence sources: Inquire-vector-search GitHub repo, `data/evidence/*.json`, `docs/technical-reference.md`.

---

<!-- _class: team -->

![w:1110](assets/director-outline/csse-team-capabilities.png)

> Team roster and source images: [ssecenter.cc.gatech.edu/people](https://ssecenter.cc.gatech.edu/people/)

---

<!-- _class: cta -->

# Bring CSSE in when research outcomes depend on software quality.

| Speed | Scale | Reproduce | Use |
| --- | --- | --- | --- |
| Latency and throughput evidence | Fresh data and managed ingestion | Source trace, tests, and runbooks | Research workflow fit |

Choose the next dataset, quality gates, and operating target.
