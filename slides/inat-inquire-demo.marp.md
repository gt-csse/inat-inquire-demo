---
marp: true
theme: default
html: true
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

  .thread {
    position: absolute;
    top: 19px;
    right: 72px;
    display: flex;
    align-items: center;
    gap: 6px;
    z-index: 2;
  }

  .thread span {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    border: 1px solid rgba(0,48,87,0.14);
    border-radius: 999px;
    background: rgba(255,255,255,0.76);
    padding: 4px 8px;
    color: var(--muted);
    font-size: 11px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .thread span:not(:last-child)::after {
    content: "\2192";
    position: absolute;
    margin-left: 74px;
    color: var(--muted);
  }

  .thread b {
    display: inline-grid;
    place-items: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #89939d;
    color: #fff;
    font-size: 12px;
    line-height: 1;
  }

  .thread .hazard b { background: var(--gold); }
  .thread .harm b { background: var(--orange); }
  .thread .control b { background: var(--gold); }
  .thread .evidence b { background: var(--blue); }
  .thread .decision b { background: var(--green); }
  .thread span:not(.active) b { opacity: 0.58; }

  .thread .hazard.active { border-color: var(--gold); color: #88702c; }
  .thread .hazard.active b { background: var(--gold); }
  .thread .harm.active { border-color: var(--orange); color: var(--orange); }
  .thread .harm.active b { background: var(--orange); }
  .thread .control.active { border-color: var(--gold); color: #88702c; }
  .thread .control.active b { background: var(--gold); }
  .thread .evidence.active { border-color: var(--blue); color: var(--blue); }
  .thread .evidence.active b { background: var(--blue); }
  .thread .decision.active { border-color: var(--green); color: var(--green); }
  .thread .decision.active b { background: var(--green); }

  section.title .thread {
    top: 55px;
  }

  section.title .thread span {
    border-color: rgba(255,255,255,0.28);
    background: rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.84);
  }

  section.title .thread b { opacity: 1; }

  section.team .thread {
    top: 18px;
    right: 42px;
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

  .card-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    width: 100%;
  }

  .card-grid.four {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .card-grid.three {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .card-grid.six {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .card {
    min-height: 112px;
    border: 1px solid rgba(0,48,87,0.14);
    border-top: 5px solid var(--blue);
    border-radius: 10px;
    background: rgba(255,255,255,0.9);
    padding: 15px 16px 13px;
    box-sizing: border-box;
  }

  .card.harm { border-top-color: var(--orange); }
  .card.hazard { border-top-color: var(--gold); }
  .card.control { border-top-color: var(--gold); }
  .card.evidence { border-top-color: var(--blue); }
  .card.decision { border-top-color: var(--green); }

  .card .icon {
    display: inline-grid;
    place-items: center;
    width: 31px;
    height: 31px;
    margin: 0 8px 9px 0;
    border-radius: 50%;
    background: var(--navy);
    color: #fff;
    font-size: 18px;
    font-weight: 900;
    vertical-align: middle;
  }

  .card.harm .icon { background: var(--orange); }
  .card.hazard .icon { background: var(--gold); }
  .card.control .icon { background: var(--gold); }
  .card.evidence .icon { background: var(--blue); }
  .card.decision .icon { background: var(--green); }

  .card h3 {
    display: inline;
    margin: 0;
    font-size: 22px;
  }

  .card p {
    margin: 0;
    color: var(--muted);
    font-size: 17px;
    line-height: 1.25;
    font-weight: 700;
  }

  .card p + p {
    margin-top: 5px;
  }

  .card .consequence {
    color: var(--navy);
    font-weight: 900;
  }

  .flow {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 21px;
    width: 100%;
    margin-top: 8px;
  }

  .flow .card {
    position: relative;
    min-height: 142px;
    padding: 13px 12px 12px;
  }

  section.cta h1 {
    max-width: 1000px;
    font-size: 58px;
  }

  section.cta .flow .icon {
    display: grid;
    margin: 0 0 9px;
  }

  section.cta .flow h3 {
    display: block;
    margin-bottom: 7px;
    font-size: 19px;
    line-height: 1.05;
  }

  section.cta .flow p {
    font-size: 15px;
    line-height: 1.2;
  }

  .flow .card:not(:last-child)::after {
    content: "\2192";
    position: absolute;
    right: -20px;
    top: 55px;
    color: var(--gold);
    font-size: 24px;
    font-weight: 900;
  }

  .metric {
    display: block;
    margin: 3px 0 5px;
    color: var(--navy);
    font-family: var(--font-condensed);
    font-size: 25px;
    line-height: 1;
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

  section.risk h2 {
    margin-bottom: 14px;
    font-size: 38px;
    line-height: 1.02;
  }

  section.risk > p {
    margin-bottom: 12px;
    font-size: 21px;
    line-height: 1.22;
  }

  section.risk table {
    margin-top: 5px;
  }

  section.risk th {
    height: 28px;
    padding: 6px 10px;
    font-size: 12px;
  }

  section.risk td {
    height: 48px;
    padding: 7px 10px;
    font-size: 16px;
    line-height: 1.12;
  }

  section.risk blockquote {
    margin-top: 10px;
    padding: 7px 12px;
  }

  section.risk blockquote p {
    font-size: 15px;
    line-height: 1.2;
  }

  section.risk > p:last-child {
    margin: 7px 0 0;
    font-size: 22px;
    line-height: 1.12;
  }

  section.risk .card-grid {
    margin-top: 8px;
  }

  section.risk .card {
    min-height: 174px;
    padding: 18px 18px 16px;
  }

  section.risk .card h3 {
    display: block;
    margin: 0 0 12px;
    font-size: 24px;
    line-height: 1.08;
  }

  section.risk .card p {
    font-size: 18px;
    line-height: 1.24;
  }

  section.risk .card .consequence {
    margin-top: 13px;
  }

  section.risk .card-grid.six {
    gap: 11px 14px;
  }

  section.risk .card-grid.six .card {
    min-height: 130px;
    padding: 13px 15px 12px;
  }

  section.risk .card-grid.six .card h3 {
    margin-bottom: 8px;
    font-size: 21px;
  }

  section.risk .card-grid.six .card p {
    font-size: 16px;
    line-height: 1.19;
  }

  section.harm-focus .card {
    min-height: 154px;
  }

  section.library {
    padding-top: 54px;
  }

  section.library h2,
  section.story-map h2 {
    margin-bottom: 10px;
    font-size: 38px;
  }

  section.library > p,
  section.story-map > p {
    margin-bottom: 12px;
    font-size: 20px;
    line-height: 1.2;
  }

  .hazard-library {
    display: grid;
    grid-template-columns: minmax(0, 0.92fr) 34px minmax(0, 1.08fr);
    gap: 7px 10px;
    width: 100%;
  }

  .hazard-library .hazard-item,
  .hazard-library .harm-item {
    display: flex;
    align-items: center;
    min-height: 42px;
    border: 1px solid rgba(0,48,87,0.13);
    border-left: 5px solid var(--gold);
    border-radius: 7px;
    background: rgba(255,255,255,0.9);
    padding: 6px 11px;
    color: var(--navy);
    font-size: 16px;
    line-height: 1.12;
    font-weight: 820;
  }

  .hazard-library .harm-item {
    border-left-color: var(--orange);
  }

  .hazard-library .map-arrow {
    display: grid;
    place-items: center;
    color: var(--orange);
    font-size: 23px;
    font-weight: 900;
  }

  section.library > p:last-child {
    margin: 10px 0 0;
    font-size: 18px;
  }

  section.story-map {
    justify-content: flex-start;
    padding-top: 54px;
  }

  .story-flow {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 32px minmax(0, 1fr) 32px minmax(0, 1fr);
    gap: 10px;
    width: 100%;
  }

  .story-column {
    min-height: 400px;
    border: 1px solid rgba(0,48,87,0.14);
    border-top: 6px solid var(--gold);
    border-radius: 10px;
    background: rgba(255,255,255,0.9);
    padding: 14px 14px 12px;
    box-sizing: border-box;
  }

  .story-column.hazards {
    border-top-color: var(--blue);
  }

  .story-column.harms {
    border-top-color: var(--orange);
  }

  .story-column h3 {
    margin: 0 0 10px;
    font-size: 23px;
  }

  .story-column span {
    display: block;
    margin-top: 7px;
    border-radius: 6px;
    background: rgba(0,48,87,0.045);
    padding: 5px 8px;
    color: var(--navy);
    font-size: 14px;
    line-height: 1.12;
    font-weight: 760;
  }

  .story-arrow {
    display: grid;
    place-items: center;
    color: var(--gold);
    font-size: 28px;
    font-weight: 900;
  }

  .problem-flow {
    display: grid;
    grid-template-columns: minmax(0, 0.88fr) 42px minmax(0, 1.12fr);
    gap: 12px;
    width: 100%;
    margin-top: 8px;
  }

  .problem-panel {
    min-height: 294px;
    border: 1px solid rgba(0,48,87,0.14);
    border-top: 6px solid var(--gold);
    border-radius: 10px;
    background: rgba(255,255,255,0.9);
    padding: 15px 16px 13px;
    box-sizing: border-box;
  }

  .problem-panel.hazards {
    border-top-color: var(--gold);
  }

  .problem-panel h3 {
    margin: 0 0 9px;
    font-size: 24px;
  }

  .problem-panel span {
    display: block;
    margin-top: 7px;
    border-radius: 6px;
    background: rgba(0,48,87,0.045);
    padding: 6px 9px;
    color: var(--navy);
    font-size: 16px;
    line-height: 1.13;
    font-weight: 760;
  }

  .problem-arrow {
    display: grid;
    place-items: center;
    color: var(--gold);
    font-size: 32px;
    font-weight: 900;
  }

  .case-context {
    display: grid;
    grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
    gap: 14px;
    width: 100%;
    margin: 0 0 14px;
  }

  .case-context span {
    border: 1px solid rgba(0,48,87,0.13);
    border-radius: 8px;
    background: rgba(255,255,255,0.86);
    padding: 9px 13px;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.15;
    font-weight: 760;
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

  section.backup {
    justify-content: center;
    align-items: center;
    background:
      linear-gradient(90deg, var(--gold), var(--orange), var(--green), var(--blue)) top / 100% 7px no-repeat,
      var(--navy);
    text-align: center;
  }

  section.backup h1 {
    color: #fff;
    font-size: 82px;
  }

  section.backup p {
    margin-top: 18px;
    color: rgba(255,255,255,0.76);
    font-size: 24px;
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
    margin-bottom: 12px;
    font-size: 56px;
    line-height: 1.02;
  }

  section.cta .flow {
    margin-top: 0;
  }

  section.cta .flow p {
    margin: 0;
    color: var(--muted);
    font-size: 15px;
    line-height: 1.2;
  }

  section.cta > p:last-child {
    max-width: 960px;
    margin: 22px 0 0;
    color: var(--navy);
    font-size: 28px;
    line-height: 1.18;
    font-weight: 850;
  }

---

<!-- _class: title -->

![w:240](assets/director-outline/gt-logo-oneline-white.svg)

<div class="thread"><span class="hazard"><b>◇</b>Hazard</span><span class="harm"><b>!</b>Harm</span><span class="control"><b>◆</b>Control</span><span class="evidence"><b>✓</b>Evidence</span><span class="decision"><b>→</b>Outcome</span></div>

# CSSE

## Reducing research risk through inspectable engineering.

**Example engagement: iNaturalist x INQUIRE**

<!-- Thread statement: Frame CSSE as the engineering partner that makes research-software risk visible and manageable. -->

---

<!-- _class: risk hazard-focus -->

<div class="thread"><span class="hazard active"><b>◇</b>Hazard</span><span class="harm"><b>!</b>Harm</span><span class="control"><b>◆</b>Control</span><span class="evidence"><b>✓</b>Evidence</span><span class="decision"><b>→</b>Outcome</span></div>

## Why Research-Software Risk Recurs

<!--
Thread statement: Combine the scientific-assumption tension and recurring research conditions into one explanation of where software hazards come from.

- Researchers narrow a problem deliberately to isolate a phenomenon. This is sound scientific reasoning, not a mistake.
- The hazard emerges when software travels beyond the data, environment, user, scale, or purpose for which those assumptions were valid.
- Root conditions are not failures of commitment or intelligence. They describe the normal environment in which research software is created.
- Complete reusable hazard library for director-specific customization:
  - Undocumented assumptions and decisions.
  - Insufficient scientific verification.
  - Irreproducible environments and workflows.
  - Prototype code becoming critical infrastructure.
  - Accumulated technical debt.
  - Platform-specific or overly complex optimization.
  - Inadequate testing and release practices.
- Alternatives for specific rooms include privacy, security, accessibility, regulatory obligations, model drift, scaling, and long-term sustainability.
- Transition: "Those hazards do not remain inside the software. The research program bears the consequences."
-->

**Research software routinely moves beyond the question, people, and context for which it was first created.**

<div class="card-grid six">
  <div class="card hazard"><h3>Evolving research</h3><p><strong>Hazard:</strong> changing data, methods, and questions outgrow what was designed or scientifically verified.</p></div>
  <div class="card hazard"><h3>Concentrated knowledge</h3><p><strong>Hazard:</strong> assumptions remain undocumented and workflows become person-dependent.</p></div>
  <div class="card hazard"><h3>Limited engineering capacity</h3><p><strong>Hazard:</strong> verification, testing, security, and release practices remain incomplete.</p></div>
  <div class="card hazard"><h3>Temporary project funding</h3><p><strong>Hazard:</strong> maintenance is deferred, technical debt accumulates, and software becomes unsupported.</p></div>
  <div class="card hazard"><h3>Prototype reuse</h3><p><strong>Hazard:</strong> one-time code becomes critical infrastructure beyond its tested purpose.</p></div>
  <div class="card hazard"><h3>AI-accelerated production</h3><p><strong>Hazard:</strong> implementation outruns understanding, validation, and accountable ownership.</p></div>
</div>

**The hazard is not the scientific assumption. It is software operating where that assumption no longer holds.**

---

<!-- _class: risk harm-focus -->

<div class="thread"><span class="hazard"><b>◇</b>Hazard</span><span class="harm active"><b>!</b>Harm</span><span class="control"><b>◆</b>Control</span><span class="evidence"><b>✓</b>Evidence</span><span class="decision"><b>→</b>Outcome</span></div>

## When Software Hazards Materialize, Research Bears the Cost.

**The same six hazards threaten scientific validity, continuity, time, and investment.**

<!--
Thread statement: Establish that the consequences are real, then show how AI increases the rate and reach of the exposure.

- Keep the distinction clear: a hazard is the potential for failure; harm is the consequence to the research program.
- Director-specific mapping library:
  - Undocumented assumptions and decisions -> incorrect conclusions that cannot be adequately explained or defended.
  - Insufficient scientific verification -> invalid findings or poorly informed research decisions.
  - Irreproducible environments and workflows -> published results that others—or the original team—cannot reproduce.
  - Prototype code becomes critical infrastructure -> research delays when fragile software must be rebuilt under pressure.
  - Accumulated technical debt -> new models, data, and methods become difficult or costly to incorporate.
  - Platform-specific or overly complex optimization -> essential software becomes inaccessible, unusable, or unsupported.
  - Inadequate testing and release practices -> research time and funding are diverted into diagnosis and remediation.
- AI is an amplifier rather than a separate category of harm: it increases the speed, volume, and apparent credibility of software that still requires validation.
- The genomics example demonstrates that apparently benign software behavior can alter scientific data. The AI evidence shows how quickly plausible but unverified implementations can now be produced and propagated.
- Sources:
  - Eklund et al. (2016), fMRI clusterwise inference false-positive rates: https://doi.org/10.1073/pnas.1602413113
  - Trisovic et al. (2022), large-scale research-code execution study: https://doi.org/10.1038/s41597-022-01143-6
  - Institute of Medicine (2012), invalid omics tests used in three Duke cancer trials: https://www.ncbi.nlm.nih.gov/books/NBK202172/
  - Nature (2021), "Autocorrect errors in Excel still creating genomics headache": https://www.nature.com/articles/d41586-021-02211-4
  - Abeysooriya et al. (2021), "Gene name errors: Lessons not learned": https://doi.org/10.1371/journal.pcbi.1008984
  - British Library (2024), cyber-incident review: https://www.bl.uk/stories/blogs/posts/learning-lessons-from-the-cyber-attack
  - Spracklen et al. (2025), "Threats to scientific software from over-reliance on AI code assistants": https://www.nature.com/articles/s43588-025-00845-2
  - Spracklen et al. (2024), package hallucinations in code-generating LLMs: https://arxiv.org/abs/2406.10279
- Transition: "The answer is not to slow down research or avoid AI. It is to pair scientific expertise and accelerated implementation with professional engineering judgment."
-->

<div class="card-grid six">
  <div class="card harm"><h3>Invalid scientific conclusions</h3><p><strong>From evolving research:</strong> outdated assumptions produce misleading results and decisions.</p></div>
  <div class="card harm"><h3>Irreproducible and orphaned work</h3><p><strong>From concentrated knowledge:</strong> results cannot be explained or extended when key people leave.</p></div>
  <div class="card harm"><h3>Uncontrolled failures in research use</h3><p><strong>From limited engineering capacity:</strong> defects, security failures, or unreliable releases escape detection.</p></div>
  <div class="card harm"><h3>Loss of research continuity</h3><p><strong>From temporary funding:</strong> essential software becomes unsupported or unavailable.</p></div>
  <div class="card harm"><h3>Research displaced by rebuilding</h3><p><strong>From prototype reuse:</strong> fragile infrastructure consumes scientific time and investment.</p></div>
  <div class="card harm"><h3>Plausible errors at machine speed</h3><p><strong>From AI-accelerated production:</strong> errors propagate into analysis before they are recognized.</p></div>
</div>

> **Documented, not conjectured:** fMRI methods produced false-positive rates up to **70%** ([PNAS](https://doi.org/10.1073/pnas.1602413113)); **74%** of shared R files failed initial execution ([Scientific Data](https://doi.org/10.1038/s41597-022-01143-6)); invalid genomic tests reached three cancer trials ([IOM](https://www.ncbi.nlm.nih.gov/books/NBK202172/)); code LLMs produced **205,474** unique hallucinated package names ([study](https://arxiv.org/abs/2406.10279)).

**Software failures do not remain technical problems; they change what can be concluded, reproduced, and sustained.**

---

<!-- _class: mitigate -->

<div class="thread"><span class="hazard"><b>◇</b>Hazard</span><span class="harm"><b>!</b>Harm</span><span class="control active"><b>◆</b>Control</span><span class="evidence"><b>✓</b>Evidence</span><span class="decision"><b>→</b>Outcome</span></div>

## CSSE Provides the Judgment Behind Effective Controls

**Researchers should not have to become professional software engineers. RSEs make dependable software their research-enabling specialty.**

<!--
Thread statement: Position CSSE's value as professional orientation and judgment, not a catalog of techniques.

- Researchers are correctly focused on scientific discovery. RSEs are interested in and accountable for the engineering questions surrounding that discovery.
- "Better and faster" comes from practiced pattern recognition: RSEs repeatedly work across architecture, verification, reproducibility, security, operations, maintainability, and handoff.
- Proportionate judgment matters. The right response depends on the research consequence, maturity, users, lifespan, and available evidence. Use the "backhoe for a nail" analogy only in narration: automation can produce an elaborate solution without understanding whether it is the right-sized solution.
- AI is valuable implementation leverage. It does not own the research context, accept accountability, negotiate tradeoffs, or decide what evidence is sufficient.
- This slide should answer why CSSE is the partner. Later slides show the techniques and evidence as proof.
- Transition: "The example that follows shows this judgment in practice: identifying the consequential risks, applying proportionate controls, and making the evidence inspectable."
-->

<div class="card-grid three">
  <div class="card control"><span class="icon">◆</span><h3>Professional focus</h3><p>RSEs look for where assumptions break, how software will change, and what must remain trustworthy.</p><p class="consequence">Researchers stay focused on discovery.</p></div>
  <div class="card control"><span class="icon">◆</span><h3>Proportionate judgment</h3><p>RSEs match the engineering response to the scientific consequence—not every problem needs the same machinery.</p><p class="consequence">The right problem is solved at the right scale.</p></div>
  <div class="card control"><span class="icon">◆</span><h3>Accountable continuity</h3><p>RSEs make decisions, evidence, ownership, and handoff durable beyond one person, prototype, or grant.</p><p class="consequence">The research investment can endure.</p></div>
</div>

> **AI is leverage, not ownership.** It can accelerate implementation; professional RSEs decide what should be engineered, how much is enough, and what evidence makes it trustworthy.

**CSSE helps research move faster without allowing avoidable software risk to move faster with it.**


---

<!-- _class: example -->

<div class="thread"><span class="hazard active"><b>◇</b>Hazard</span><span class="harm active"><b>!</b>Harm</span><span class="control"><b>◆</b>Control</span><span class="evidence"><b>✓</b>Evidence</span><span class="decision"><b>→</b>Outcome</span></div>

## Applying the Framework: iNaturalist x INQUIRE

<!--
Thread statement: Show how CSSE used judgment to select three consequential, demonstrable risks rather than trying to engineer every possible concern.

- iNaturalist provides the motivating scale: more than 300 million observations and continued growth. INQUIRE is the concrete evaluation setting, with 250 expert information needs over the 5-million-image iNat24 collection.
- Keep those numbers distinct: 300 million describes the broader iNaturalist context; 5 million describes the benchmark collection used by INQUIRE.
- Natural-language retrieval is useful because researchers may describe behavior, habitat, or visual relationships that are not captured by a species label alone.
- The research risk is not simply that a search result looks imperfect. Weak retrieval can change which examples a researcher sees and therefore influence downstream interpretation.
- Provenance matters because a result must be traceable back to its source observation and associated metadata before it can support research.
- Growth creates an engineering risk as well: a promising prototype can become expensive to rerun, extend, or operate if ingestion and indexing are brittle.
- Transition: "These three risks determine the controls shown in the demo; everything else is deliberately out of scope."
-->

<div class="case-context">
  <span><strong>Goal:</strong> trustworthy biodiversity image search</span>
  <span><strong>Scale:</strong> 300M+ observations · 250 expert queries · 5M images</span>
</div>

<div class="card-grid three">
  <div class="card harm"><span class="icon">!</span><h3>Unevaluated retrieval</h3><p><strong>Hazard:</strong> compelling results are accepted without systematic quality review.</p><p class="consequence">Harm: misleading evidence can shape research interpretation.</p></div>
  <div class="card harm"><span class="icon">!</span><h3>Untraceable results</h3><p><strong>Hazard:</strong> retrieved images lose their source and usage context.</p><p class="consequence">Harm: findings cannot be independently checked or responsibly reused.</p></div>
  <div class="card harm"><span class="icon">!</span><h3>Brittle growth</h3><p><strong>Hazard:</strong> ingestion and search work only for one dataset or one operator.</p><p class="consequence">Harm: growing data converts research time and funding into rework.</p></div>
</div>

**CSSE prioritized three bounded risks that are consequential to the research and inspectable in a short demo.**

> Public context: [iNaturalist's 300M milestone](https://www.inaturalist.org/blog/126478); [INQUIRE benchmark paper](https://papers.nips.cc/paper_files/paper/2024/file/e4ad9c75f0d60ed75700f020adb3f705-Paper-Datasets_and_Benchmarks_Track.pdf).


---

<!-- _class: mitigate -->

<div class="thread"><span class="hazard"><b>◇</b>Hazard</span><span class="harm"><b>!</b>Harm</span><span class="control active"><b>◆</b>Control</span><span class="evidence"><b>✓</b>Evidence</span><span class="decision"><b>→</b>Outcome</span></div>

## Controls Chosen to Match the Risks

<!--
Thread statement: Show that CSSE selected proportionate controls and made each one inspectable in the demo.

- Start with evaluation: run representative queries and show both the ranked images and the retrieval metrics. The point is to make quality review repeatable, not to rely on a compelling anecdotal query.
- For traceability, open an individual result and point out the score, source ID, URL, license, dimensions, and object key. These fields connect a retrieved image back to evidence a researcher can verify.
- For controlled growth, demonstrate the same workflow before and after appending data: ingest, index, search, and rerun. The small 24-to-48-vector example illustrates the mechanism; it is not intended to simulate iNaturalist's full scale.
- Call out the operational controls behind the interface: repeatable scripts, explicit recovery paths, and documented deployment comparisons reduce dependence on one developer or environment.
- If the live system is unavailable, use the recorded fallback and narrate the same checkpoints. The evidence should survive the demo format.
- Transition: "The controls are visible; the next question is what the current evidence actually proves."
-->

<div class="card-grid three">
  <div class="card control"><span class="icon">◆</span><h3>Repeatable evaluation</h3><p>Use representative queries, ranked results, retrieval metrics, and explicit quality thresholds.</p><p class="consequence">Control for unevaluated retrieval.</p></div>
  <div class="card control"><span class="icon">◆</span><h3>Source-level traceability</h3><p>Carry scores, source IDs, URLs, licenses, dimensions, dataset IDs, and object keys with each result.</p><p class="consequence">Control for untraceable results.</p></div>
  <div class="card control"><span class="icon">◆</span><h3>Controlled ingestion and growth</h3><p>Use repeatable batches, count deltas, same-query reruns, recovery paths, and explicit deployment options.</p><p class="consequence">Control for brittle growth.</p></div>
</div>

> **Live journey:** start → ingest `24` → search `nudibranch` → append `24` → rerun the same query → inspect results and evidence.

**The small live run demonstrates the control mechanism; it does not simulate production scale.**


---

<!-- _class: value -->

<div class="thread"><span class="hazard"><b>◇</b>Hazard</span><span class="harm"><b>!</b>Harm</span><span class="control"><b>◆</b>Control</span><span class="evidence active"><b>✓</b>Evidence</span><span class="decision"><b>→</b>Outcome</span></div>

## What the Demo Can—and Cannot—Prove

<!--
Thread statement: Separate direct live proof, captured benchmark evidence, and target-state readiness so the investment claim remains credible.

- Read the cards as control-to-evidence pairs, not as three unrelated performance claims.
- Evaluation gates: precision at 10 asks how many of the first ten results are relevant; NDCG at 10 also rewards placing the most relevant results higher in the ranking. Together they provide a more useful view than a single showcase query.
- Traceability: source-level identifiers, URLs, licenses, dimensions, and object keys let a reviewer follow a result back through the retrieval pipeline and assess whether it is usable.
- Controlled growth: ingestion throughput, p95 search latency, repeatable recovery, and deployment comparisons show that scaling behavior can be measured and revisited.
- Be explicit about the boundary of the claim: these are demo measurements from a limited test setup. They are evidence that the controls work, not production service-level objectives or proof of quantified risk reduction.
- The investment implication is conditional: this evidence can justify a pilot, while a production service would require larger-scale validation, agreed thresholds, monitoring, and operational ownership.
- The checked-in benchmark values are curated presentation evidence. The final raw benchmark export remains an evidence gap and should be captured before treating them as a fresh benchmark run.
- Production-readiness controls are a target operating model derived from the source architecture and demo assumptions; they are not evidence of a deployed production service.
- Transition: use the strength of the evidence—and the remaining uncertainty—to decide the next bounded increment.
-->

<div class="card-grid three">
  <div class="card evidence"><span class="icon">✓</span><h3>Evaluation evidence</h3><span class="metric">0.72 / 0.81</span><p>P@10 / NDCG@10 across 50 queries in the captured benchmark artifact.</p><p class="consequence">Captured evidence; final raw export still required.</p></div>
  <div class="card evidence"><span class="icon">⌁</span><h3>Traceability evidence</h3><span class="metric">Directly inspectable</span><p>Scores · IDs · URLs · licenses · dimensions · datasets · object keys.</p><p class="consequence">Visible in live results and fallback artifacts.</p></div>
  <div class="card evidence"><span class="icon">↗</span><h3>Growth evidence</h3><span class="metric">24 → 48 live</span><p>Repeatable append and same-query rerun; captured context includes 37.8 images/s and 418 ms p95.</p><p class="consequence">Mechanism proven; production scale not proven.</p></div>
</div>

> **Evidence boundary:** supports a prototype-to-pilot decision—not production SLOs, quantified risk reduction, or a claim of full iNaturalist scale.


---

<!-- _class: team -->

![w:1110](assets/director-outline/csse-team-capabilities.png)

> Team roster and source images: [ssecenter.cc.gatech.edu/people](https://ssecenter.cc.gatech.edu/people/)

<!--
Thread statement: Answer "Who is GT CSSE?" immediately after the example has demonstrated the team's judgment, controls, and evidence.

- Present the team as the professional capability behind the example, not as an unrelated roster.
- Transition: "This is the team that can bring the same risk-informed engineering judgment to the next research challenge."
-->

---

<!-- _class: cta -->

<div class="thread"><span class="hazard"><b>◇</b>Hazard</span><span class="harm"><b>!</b>Harm</span><span class="control"><b>◆</b>Control</span><span class="evidence"><b>✓</b>Evidence</span><span class="decision active"><b>→</b>Outcome</span></div>

# Protect the Research Outcome—Before Software Risk Compounds.

<!--
Thread statement: Close on the value created by risk-informed engineering, not on a predetermined service commitment.

- The deck uses a simplified Bowtie-inspired risk-and-assurance chain:
  Hazard -> Harm -> Control -> Evidence -> Outcome.
- This exact five-part sequence is not a standard named framework.
- Established Bowtie analysis connects hazards and threats to a loss-of-control event and consequences, with preventive and mitigating barriers.
- "Evidence" is added here as assurance that a barrier is implemented and effective; "Outcome" states why the process matters to research leadership.
- Sources:
  - UK Civil Aviation Authority, Bowtie method: https://www.caa.co.uk/safety-initiatives/working-with-industry/bowtie/about-bowtie/how-does-bowtie-work/
  - Office of Rail and Road, controls and assurance terminology: https://www.orr.gov.uk/guidance-compliance/rail/health-safety/occupational-health/good-practice/health-risk-management-assurance
-->

<div class="flow">
  <div class="card hazard"><span class="icon">◇</span><h3>Recognize hazard</h3><p>Where could assumptions or software fail?</p></div>
  <div class="card harm"><span class="icon">!</span><h3>Name the harm</h3><p>What could the research lose?</p></div>
  <div class="card control"><span class="icon">◆</span><h3>Choose a barrier</h3><p>What proportionate control reduces the risk?</p></div>
  <div class="card evidence"><span class="icon">✓</span><h3>Assure effectiveness</h3><p>What evidence shows the control works?</p></div>
  <div class="card decision"><span class="icon">→</span><h3>Protect the outcome</h3><p>Trustworthy results · reproducible work · durable investment</p></div>
</div>

**Bring CSSE in early—so research can move faster with known risks, proportionate controls, and defensible evidence.**

---

<!-- _class: backup -->

# Backup

Supporting information for discussion

<!-- Thread statement: Use the backup material to answer questions without interrupting the main hazard-to-outcome narrative. -->

---

<!-- _class: risk hazard-focus -->

<div class="thread"><span class="hazard active"><b>◇</b>Hazard</span><span class="harm"><b>!</b>Harm</span><span class="control"><b>◆</b>Control</span><span class="evidence"><b>✓</b>Evidence</span><span class="decision"><b>→</b>Outcome</span></div>

## Backup: Additional Condition-to-Hazard Mappings

**Substitute the mappings most relevant to the director, program, or research domain.**

<!--
- These six cards are alternatives for the six visible cards on Slide 2, not additional main-story content.
- Select only the mappings relevant to the director or research program.
-->

<div class="card-grid six">
  <div class="card hazard"><h3>Interdisciplinary communication</h3><p><strong>Hazard:</strong> requirements, provenance, and failure boundaries are interpreted differently across teams.</p></div>
  <div class="card hazard"><h3>Publication and delivery pressure</h3><p><strong>Hazard:</strong> short-term results defer validation, documentation, and maintainability.</p></div>
  <div class="card hazard"><h3>Performance pressure</h3><p><strong>Hazard:</strong> narrow optimization creates complex, platform-dependent implementations.</p></div>
  <div class="card hazard"><h3>Changing dependencies</h3><p><strong>Hazard:</strong> environments drift and previously repeatable workflows stop working.</p></div>
  <div class="card hazard"><h3>Growing data and user scale</h3><p><strong>Hazard:</strong> ingestion, performance, cost, and recovery behavior become brittle.</p></div>
  <div class="card hazard"><h3>Fragmented ownership</h3><p><strong>Hazard:</strong> maintenance, security, incidents, and handoffs have no accountable owner.</p></div>
</div>

**Together, the main and backup libraries provide twelve reusable mappings without overcrowding the presented story.**

---

<!-- _class: risk -->

<div class="thread"><span class="hazard"><b>◇</b>Hazard</span><span class="harm active"><b>!</b>Harm</span><span class="control"><b>◆</b>Control</span><span class="evidence active"><b>✓</b>Evidence</span><span class="decision"><b>→</b>Outcome</span></div>

## Backup: Public Evidence That the Harms Are Real

**These documented incidents and empirical studies anchor the problem in observed outcomes rather than conjecture.**

<!--
- Use two or three examples suited to the audience; do not narrate every card.
- Distinguish observed harm from measured exposure. The AI package study demonstrates a repeatable exposure mechanism, not a catalog of downstream scientific incidents.
-->

<div class="card-grid six">
  <div class="card evidence"><h3>Invalid fMRI inferences</h3><p>Common analysis methods produced false-positive rates up to <strong>70%</strong>; testing also uncovered a 15-year-old bug. <a href="https://doi.org/10.1073/pnas.1602413113">PNAS, 2016</a></p></div>
  <div class="card evidence"><h3>Genomic data silently altered</h3><p>Approximately <strong>30%</strong> of examined papers with supplementary gene lists contained gene-name errors. <a href="https://doi.org/10.1371/journal.pcbi.1008984">PLOS, 2021</a></p></div>
  <div class="card evidence"><h3>Shared code would not run</h3><p><strong>74%</strong> of more than 9,000 shared R files failed initial execution in a clean environment. <a href="https://doi.org/10.1038/s41597-022-01143-6">Scientific Data, 2022</a></p></div>
  <div class="card evidence"><h3>Invalid tests reached patients</h3><p>Invalid omics-based predictors were used in three Duke cancer clinical trials. <a href="https://www.ncbi.nlm.nih.gov/books/NBK202172/">IOM, 2012</a></p></div>
  <div class="card evidence"><h3>Researchers lost access</h3><p>A ransomware attack removed access to most British Library online systems and directly disrupted research services. <a href="https://www.bl.uk/stories/blogs/posts/learning-lessons-from-the-cyber-attack">British Library, 2024</a></p></div>
  <div class="card evidence"><h3>AI invented dependencies</h3><p>Code LLMs generated <strong>205,474</strong> unique nonexistent package names across the study. <a href="https://arxiv.org/abs/2406.10279">Spracklen et al., 2024</a></p></div>
</div>

**The pattern spans scientific validity, reproducibility, patient-facing decisions, continuity, and AI-assisted development.**
