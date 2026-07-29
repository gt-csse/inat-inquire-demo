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
    padding: 70px 72px 32px;
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
    gap: 0;
    z-index: 2;
  }

  .thread span {
    position: relative;
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

  .thread span:not(:last-child) {
    margin-right: 22px;
  }

  .thread span:not(:last-child)::after {
    content: "\2192";
    position: absolute;
    left: calc(100% + 6px);
    top: 50%;
    margin: 0;
    color: var(--muted);
    font-size: 13px;
    line-height: 1;
    transform: translateY(-50%);
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

  section.cta {
    background:
      linear-gradient(90deg, var(--gold), var(--orange), var(--green), var(--blue)) top / 100% 7px no-repeat,
      #001d33;
  }

  section.cta h1 {
    color: #fff;
  }

  section.cta .thread span {
    border-color: rgba(255,255,255,0.28);
    background: rgba(255,255,255,0.08);
    color: rgba(255,255,255,0.84);
  }

  section.cta .thread b {
    opacity: 1;
  }

  section.cta .flow .card {
    border-color: rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.08);
  }

  section.cta .flow h3 {
    color: #fff;
  }

  section.cta .flow p {
    color: rgba(255,255,255,0.76);
  }

  section.cta .flow .engage {
    border-color: rgba(179,163,105,0.78);
    background: rgba(179,163,105,0.16);
    box-shadow: 0 12px 28px rgba(0,0,0,0.25);
  }

  section.cta .flow .decision {
    border-color: rgba(33,110,78,0.85);
    background: rgba(33,110,78,0.22);
  }

  section.cta .flow .card:not(:last-child)::after {
    color: var(--gold);
  }

  section.cta > p:last-child {
    color: var(--gold);
  }

  section.cta::after {
    border-color: rgba(255,255,255,0.3);
    background: rgba(255,255,255,0.1);
    color: #fff;
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

  section.cta .flow .engage {
    transform: translateY(-9px);
    border-color: rgba(179,163,105,0.55);
    box-shadow: 0 10px 24px rgba(0,48,87,0.12);
  }

  section.cta .flow .engage::before {
    content: "ACT HERE";
    position: absolute;
    top: -13px;
    right: 12px;
    border-radius: 999px;
    background: var(--gold);
    color: var(--navy);
    padding: 4px 8px;
    font-size: 10px;
    line-height: 1;
    font-weight: 950;
    letter-spacing: 0.06em;
  }

  section.cta .flow .decision {
    background: rgba(33,110,78,0.22);
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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 70px 72px 32px;
    background:
      linear-gradient(90deg, var(--gold), var(--orange), var(--green), var(--blue)) top / 100% 7px no-repeat,
      linear-gradient(135deg, rgba(255,255,255,0.98), rgba(247,248,243,0.92)),
      var(--paper);
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

  section.team h2 {
    margin-bottom: 4px;
  }

  .team-groups {
    display: grid;
    grid-template-columns: 2fr 4fr;
    gap: 12px;
    width: 100%;
    max-width: 1080px;
    margin: 4px auto 8px;
  }

  .team-groups div {
    border: 1px solid rgba(0,48,87,0.13);
    border-radius: 7px;
    background: rgba(255,255,255,0.9);
    padding: 7px 12px;
    color: var(--navy);
    font-size: 15px;
    font-weight: 900;
  }

  .team-groups div:first-child {
    border-top: 4px solid var(--gold);
  }

  .team-groups div:last-child {
    border-top: 4px solid var(--blue);
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 12px;
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
  }

  .person-card {
    border: 1px solid rgba(0,48,87,0.12);
    border-radius: 8px;
    background: rgba(255,255,255,0.9);
    padding: 10px 7px 9px;
    text-align: center;
  }

  .person-photo {
    width: 104px;
    height: 104px;
    margin: 0 auto 7px;
    border-radius: 50%;
    background-image: url("assets/director-outline/csse-team-capabilities.png");
    background-repeat: no-repeat;
    background-size: 914px 640px;
  }

  .person-photo.rich { background-position: -80px -176px; }
  .person-photo.jeffrey { background-position: -274px -176px; }
  .person-photo.dave { background-position: -555px -176px; }
  .person-photo.ketan { background-position: -706px -176px; }
  .person-photo.robert { background-position: -555px -389px; }
  .person-photo.nirvana { background-position: -706px -389px; }

  .person-card strong {
    display: block;
    color: var(--navy);
    font-size: 15px;
    line-height: 1.05;
  }

  .person-card span {
    display: block;
    margin-top: 3px;
    color: var(--muted);
    font-size: 11px;
    line-height: 1.12;
    font-weight: 750;
  }

  .capability-row {
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 12px;
  }

  .capability-row span {
    border: 1px solid rgba(0,48,87,0.14);
    border-radius: 999px;
    background: rgba(255,255,255,0.9);
    padding: 5px 10px;
    color: var(--navy);
    font-size: 12px;
    font-weight: 850;
  }

  .product-outcome {
    display: grid;
    grid-template-columns: minmax(0, 2.15fr) minmax(270px, 0.85fr);
    align-items: stretch;
    gap: 18px;
    width: 100%;
    max-width: 1080px;
    margin: 18px auto 0;
  }

  .product-shot {
    overflow: hidden;
    border: 1px solid rgba(0,48,87,0.16);
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 12px 30px rgba(0,48,87,0.12);
  }

  .product-shot img {
    display: block;
    width: 100%;
    height: 385px;
    object-fit: cover;
    object-position: top center;
  }

  .outcome-stack {
    display: grid;
    gap: 11px;
  }

  .outcome-card {
    border: 1px solid rgba(0,48,87,0.13);
    border-left: 5px solid var(--green);
    border-radius: 8px;
    background: rgba(255,255,255,0.92);
    padding: 14px 13px;
  }

  .outcome-card strong {
    display: block;
    margin-bottom: 5px;
    color: var(--navy);
    font-size: 18px;
    line-height: 1.05;
  }

  .outcome-card span {
    display: block;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.18;
    font-weight: 720;
  }

  .team-layout {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 14px;
    width: 100%;
    max-width: 1080px;
    margin: 4px auto 0;
  }

  .team-cluster {
    border: 1px solid rgba(0,48,87,0.12);
    border-radius: 9px;
    background: rgba(255,255,255,0.55);
    padding: 10px;
  }

  .team-cluster > strong {
    display: block;
    margin-bottom: 8px;
    border-radius: 6px;
    padding: 7px 10px;
    color: var(--navy);
    font-size: 15px;
    line-height: 1;
  }

  .team-cluster.leadership > strong {
    border-top: 4px solid var(--gold);
    background: rgba(179,163,105,0.1);
  }

  .team-cluster.operations > strong {
    border-top: 4px solid var(--blue);
    background: rgba(0,79,159,0.08);
  }

  .cluster-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 9px;
  }

  .team-cluster.leadership .cluster-grid {
    grid-template-columns: 1fr;
  }

  .team-cluster .person-card {
    display: grid;
    grid-template-columns: 92px 1fr;
    align-items: center;
    min-height: 112px;
    padding: 7px;
    text-align: left;
  }

  .team-cluster .person-photo {
    width: 88px;
    height: 88px;
    margin: 0;
    background-size: 773px 542px;
  }

  .team-cluster .person-photo.rich { background-position: -68px -149px; }
  .team-cluster .person-photo.jeffrey { background-position: -232px -149px; }
  .team-cluster .person-photo.dave { background-position: -470px -149px; }
  .team-cluster .person-photo.ketan { background-position: -597px -149px; }
  .team-cluster .person-photo.robert { background-position: -470px -329px; }
  .team-cluster .person-photo.nirvana { background-position: -597px -329px; }

  .team-cluster .person-card strong,
  .team-cluster .person-card span {
    padding-left: 8px;
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
    color: rgba(255,255,255,0.76);
    font-size: 15px;
    line-height: 1.2;
  }

  section.cta > p:last-child {
    max-width: 960px;
    margin: 22px 0 0;
    color: var(--gold);
    font-size: 28px;
    line-height: 1.18;
    font-weight: 850;
  }

  section.cta > p:last-child strong {
    color: var(--gold);
  }

  .hero-graphic {
    display: block;
    max-width: 100%;
    max-height: 315px;
    margin: 0 auto 4px;
    object-fit: contain;
  }

  section:has(.hero-graphic) {
    justify-content: center;
  }

  section:has(.hero-graphic) h2 {
    margin-bottom: 8px;
  }

  section:has(.hero-graphic) > p:last-child {
    max-width: 100%;
    margin: 8px 0 0;
    text-align: center;
    font-size: 21px;
  }

  .visual-labels {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 2px;
  }

  .visual-labels span {
    border: 1px solid rgba(0,48,87,0.14);
    border-radius: 999px;
    background: rgba(255,255,255,0.88);
    padding: 6px 11px;
    color: var(--navy);
    font-size: 15px;
    font-weight: 850;
  }

  .caption-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 9px;
    width: 100%;
    margin-top: 5px;
  }

  .caption-grid.four {
    grid-template-columns: repeat(4, 1fr);
  }

  .caption-grid.six {
    grid-template-columns: repeat(3, 1fr);
  }

  .caption-grid > div {
    min-height: 54px;
    border: 1px solid rgba(0,48,87,0.13);
    border-left: 4px solid var(--gold);
    border-radius: 7px;
    background: rgba(255,255,255,0.9);
    padding: 7px 10px;
  }

  .caption-grid strong {
    display: block;
    margin-bottom: 2px;
    color: var(--navy);
    font-size: 15px;
    line-height: 1.1;
  }

  .caption-grid span {
    display: block;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.15;
    font-weight: 720;
  }

  section:has(.caption-grid.six) .hero-graphic {
    max-height: 265px;
  }

  section:has(.caption-grid.four) .hero-graphic {
    max-height: 285px;
  }

  .risk-map {
    position: relative;
    width: 100%;
    max-width: 1040px;
    height: 440px;
    margin: 16px auto 0;
  }

  .risk-map img {
    position: absolute;
    top: 48px;
    left: 50%;
    width: 760px;
    height: 345px;
    object-fit: contain;
    transform: translateX(-50%);
  }

  .risk-callout {
    position: absolute;
    width: 29%;
    min-height: 48px;
    border: 1px solid rgba(0,48,87,0.13);
    border-bottom: 4px solid var(--gold);
    border-radius: 7px;
    background: rgba(255,255,255,0.94);
    padding: 6px 10px;
    text-align: center;
  }

  .risk-callout.bottom {
    border-top: 4px solid var(--gold);
    border-bottom-width: 1px;
  }

  .risk-callout strong {
    display: block;
    color: var(--navy);
    font-size: 15px;
    line-height: 1.1;
  }

  .risk-callout span {
    display: block;
    margin-top: 2px;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.12;
    font-weight: 720;
  }

  .risk-callout.left { left: 1%; }
  .risk-callout.center { left: 35.5%; }
  .risk-callout.right { right: 1%; }
  .risk-callout.top { top: 0; }
  .risk-callout.bottom { bottom: 0; }

  .risk-side-map {
    display: grid;
    grid-template-columns: 235px minmax(0, 1fr) 235px;
    align-items: stretch;
    gap: 14px;
    width: 100%;
    max-width: 1120px;
    height: 405px;
    margin: 14px auto 0;
  }

  .risk-side-map > img {
    align-self: center;
    width: 100%;
    height: 405px;
    object-fit: contain;
  }

  .risk-side-column {
    display: grid;
    grid-template-rows: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  .risk-side-card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid rgba(0,48,87,0.14);
    border-radius: 8px;
    background: rgba(255,255,255,0.95);
    padding: 12px 14px;
    box-sizing: border-box;
  }

  .risk-side-column.left .risk-side-card {
    border-right: 5px solid var(--gold);
    text-align: right;
  }

  .risk-side-column.right .risk-side-card {
    border-left: 5px solid var(--gold);
    text-align: left;
  }

  .risk-side-column.left .risk-side-card::after,
  .risk-side-column.right .risk-side-card::before {
    position: absolute;
    top: 50%;
    width: 15px;
    height: 2px;
    background: var(--gold);
    content: "";
  }

  .risk-side-column.left .risk-side-card::after {
    right: -19px;
  }

  .risk-side-column.right .risk-side-card::before {
    left: -19px;
  }

  .risk-side-card strong {
    color: var(--navy);
    font-size: 17px;
    line-height: 1.1;
  }

  .risk-side-card span {
    margin-top: 5px;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.18;
    font-weight: 740;
  }

  section:has(.risk-side-map) {
    justify-content: flex-start;
  }

  section:has(.risk-side-map) h2 {
    margin-bottom: 4px;
  }

  .evidence-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    width: 100%;
    max-width: 1100px;
    margin: 16px auto 0;
  }

  .evidence-block {
    display: grid;
    grid-template-columns: 118px minmax(0, 1fr);
    align-items: center;
    min-height: 142px;
    overflow: hidden;
    border: 1px solid rgba(0,48,87,0.14);
    border-left: 5px solid var(--orange);
    border-radius: 9px;
    background: rgba(255,255,255,0.94);
    padding: 10px 12px 10px 8px;
    box-sizing: border-box;
  }

  .evidence-block img {
    width: 108px;
    height: 108px;
    border: 2px solid var(--gold);
    border-radius: 50%;
    object-fit: cover;
  }

  .evidence-copy {
    padding-left: 9px;
  }

  .evidence-copy strong,
  .evidence-copy span,
  .evidence-copy small {
    display: block;
  }

  .evidence-copy strong {
    color: var(--navy);
    font-size: 17px;
    line-height: 1.08;
  }

  .evidence-copy span {
    margin-top: 4px;
    color: var(--muted);
    font-size: 13px;
    line-height: 1.18;
    font-weight: 740;
  }

  .evidence-copy span strong {
    display: inline;
    color: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .evidence-copy small {
    margin-top: 6px;
    color: var(--blue);
    font-size: 11px;
    line-height: 1.1;
    font-weight: 850;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }

  section:has(.evidence-grid) {
    justify-content: flex-start;
  }

  section:has(.evidence-grid) h2 {
    margin-bottom: 4px;
  }

  .retraction-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    width: 100%;
    max-width: 1100px;
    margin: 16px auto 0;
  }

  .retraction-card {
    min-height: 184px;
    overflow: hidden;
    border: 1px solid rgba(0,48,87,0.14);
    border-top: 5px solid var(--orange);
    border-radius: 9px;
    background: rgba(255,255,255,0.94);
    padding: 0;
    box-sizing: border-box;
  }

  .retraction-card img {
    display: block;
    width: 100%;
    height: 82px;
    object-fit: cover;
    object-position: center;
    border-bottom: 1px solid rgba(0,48,87,0.1);
  }

  .retraction-copy {
    padding: 8px 12px 10px;
  }

  .retraction-card small,
  .retraction-card strong,
  .retraction-card span {
    display: block;
  }

  .retraction-card small {
    color: var(--blue);
    font-size: 11px;
    line-height: 1.1;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .retraction-card strong {
    margin-top: 4px;
    color: var(--navy);
    font-size: 16px;
    line-height: 1.08;
  }

  .retraction-card span {
    margin-top: 4px;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.15;
    font-weight: 740;
  }

  section:has(.retraction-grid) {
    justify-content: flex-start;
  }

  section:has(.retraction-grid) h2 {
    margin-bottom: 4px;
  }

  .news-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
    width: 100%;
    max-width: 1100px;
    margin: 14px auto 0;
  }

  .news-card {
    overflow: hidden;
    min-height: 190px;
    border: 1px solid rgba(0,48,87,0.16);
    border-radius: 9px;
    background: rgba(255,255,255,0.96);
    box-shadow: 0 5px 14px rgba(0,48,87,0.07);
  }

  .news-card img {
    display: block;
    width: 100%;
    height: 103px;
    object-fit: cover;
    border-bottom: 4px solid var(--orange);
  }

  .news-copy {
    padding: 8px 11px 10px;
  }

  .news-copy small,
  .news-copy strong,
  .news-copy span {
    display: block;
  }

  .news-copy small {
    color: var(--blue);
    font-size: 10px;
    line-height: 1;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .news-copy strong {
    margin-top: 5px;
    color: var(--navy);
    font-size: 14px;
    line-height: 1.12;
  }

  .news-copy span {
    margin-top: 5px;
    color: var(--muted);
    font-size: 11px;
    line-height: 1.12;
    font-weight: 740;
  }

  section:has(.news-grid) {
    justify-content: flex-start;
  }

  section:has(.news-grid) h2 {
    margin-bottom: 4px;
  }

  .snapshot-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 13px;
    width: 100%;
    max-width: 1100px;
    margin: 12px auto 0;
  }

  .snapshot-card {
    overflow: hidden;
    min-height: 194px;
    border: 1px solid rgba(0,48,87,0.2);
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 6px 16px rgba(0,48,87,0.09);
  }

  .snapshot-bar {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 18px;
    padding: 0 8px;
    background: #e8ebee;
  }

  .snapshot-bar i {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #aeb6bd;
  }

  .snapshot-source {
    padding: 6px 10px 5px;
    border-bottom: 1px solid #e1e5e8;
    color: var(--blue);
    font-size: 10px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .snapshot-body {
    display: grid;
    grid-template-columns: 104px 1fr;
    min-height: 164px;
  }

  .snapshot-body img {
    width: 104px;
    height: 164px;
    object-fit: cover;
    border-right: 4px solid var(--orange);
  }

  .snapshot-copy {
    padding: 9px 10px;
  }

  .snapshot-copy strong,
  .snapshot-copy span,
  .snapshot-copy small {
    display: block;
  }

  .snapshot-copy strong {
    color: var(--navy);
    font-family: var(--font-serif);
    font-size: 14px;
    line-height: 1.12;
  }

  .snapshot-copy span {
    margin-top: 8px;
    color: var(--ink);
    font-size: 12px;
    line-height: 1.15;
    font-weight: 780;
  }

  .snapshot-copy small {
    margin-top: 7px;
    color: var(--muted);
    font-size: 9px;
    line-height: 1.1;
    font-weight: 700;
  }

  section:has(.snapshot-grid) {
    justify-content: flex-start;
  }

  section:has(.snapshot-grid) h2 {
    margin-bottom: 4px;
  }

  section:has(.risk-map) {
    justify-content: center;
  }

  section:has(.risk-map) h2 {
    margin-bottom: 4px;
  }

  section:has(.risk-map) > p:last-child {
    max-width: 100%;
    margin: 5px 0 0;
    text-align: center;
    font-size: 21px;
  }

  .annotation-map {
    width: 100%;
    max-width: 1060px;
    margin: 18px auto 0;
  }

  .annotation-map > img {
    display: block;
    width: 100%;
    height: 325px;
    object-fit: contain;
    margin: 0 auto;
  }

  .annotation-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    width: 100%;
  }

  .annotation-row.two {
    grid-template-columns: repeat(2, 1fr);
    max-width: 820px;
    margin: 0 auto;
  }

  .annotation-card {
    min-height: 56px;
    border: 1px solid rgba(0,48,87,0.13);
    border-top: 4px solid var(--gold);
    border-radius: 7px;
    background: rgba(255,255,255,0.94);
    padding: 7px 11px;
    text-align: center;
  }

  .annotation-row.top .annotation-card {
    border-top-width: 1px;
    border-bottom: 4px solid var(--gold);
  }

  .annotation-card strong {
    display: block;
    color: var(--navy);
    font-size: 16px;
    line-height: 1.1;
  }

  .annotation-card span {
    display: block;
    margin-top: 3px;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.15;
    font-weight: 720;
  }

  .annotation-map.corner > img {
    height: 270px;
  }

  .side-annotation-map {
    display: grid;
    grid-template-columns: minmax(0, 2.2fr) minmax(250px, 0.8fr);
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 1050px;
    margin: 18px auto 0;
  }

  .side-annotation-map > img {
    width: 100%;
    height: 390px;
    object-fit: contain;
    object-position: center;
    justify-self: center;
  }

  /* Normalize optical area across illustrations with different aspect ratios. */
  .side-annotation-map > img.visual-risk {
    width: 80%;
  }

  .side-annotation-map > img.visual-controls {
    width: 100%;
  }

  .side-annotation-map > img.visual-evidence {
    width: 85%;
  }

  .side-callouts {
    display: grid;
    gap: 18px;
  }

  .side-callouts .annotation-card {
    position: relative;
    min-height: 78px;
    border-top-width: 1px;
    border-left: 4px solid var(--gold);
    text-align: left;
  }

  section:has(.annotation-map),
  section:has(.side-annotation-map) {
    justify-content: flex-start;
  }

  section:has(.risk-map) {
    justify-content: flex-start;
  }

  section:has(.annotation-map) h2,
  section:has(.side-annotation-map) h2 {
    margin-bottom: 5px;
  }

  section:has(.annotation-map) > p:last-child,
  section:has(.side-annotation-map) > p:last-child {
    max-width: 100%;
    margin: 6px 0 0;
    text-align: center;
    font-size: 21px;
  }

  .map-takeaway {
    width: 100%;
    max-width: 1060px;
    margin: 3px auto 16px;
    border-left: 6px solid var(--orange);
    border-radius: 0 8px 8px 0;
    background: linear-gradient(90deg, rgba(249,94,16,0.11), rgba(255,255,255,0.55));
    padding: 9px 16px 10px;
    color: var(--navy);
    text-align: left;
    font-size: 23px;
    line-height: 1.12;
    font-weight: 900;
  }

  section:has(.map-takeaway) h2 {
    margin-bottom: 4px;
  }

  .metric-strip {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    margin-top: 4px;
  }

  .metric-strip div {
    border-top: 4px solid var(--gold);
    border-radius: 8px;
    background: rgba(255,255,255,0.88);
    padding: 8px 12px;
    text-align: center;
  }

  .metric-strip strong {
    display: block;
    font-size: 25px;
    line-height: 1;
  }

  .metric-strip span {
    color: var(--muted);
    font-size: 15px;
    font-weight: 800;
  }

---

<!-- _class: title -->

![w:240](assets/director-outline/gt-logo-oneline-white.svg)

# CSSE

## Your software engineering partner for reducing research risk through proportionate judgment

**Example engagement: iNaturalist x INQUIRE**

<!-- Thread statement: Frame CSSE as the engineering partner that makes research-software risk visible and manageable. -->

---

<!-- _class: risk -->

<div class="thread"><span class="hazard"><b>◇</b>Hazard</span><span class="harm active"><b>!</b>Harm</span><span class="control"><b>◆</b>Control</span><span class="evidence active"><b>✓</b>Evidence</span></div>

## Research Harm Due to Software Is Real

<!--
- Use two or three examples suited to the audience; do not narrate every card.
- Distinguish observed harm from measured exposure. The AI package study demonstrates a repeatable exposure mechanism, not a catalog of downstream scientific incidents.
- Invalid fMRI inferences: common methods produced false-positive rates up to 70%; testing also uncovered a 15-year-old bug. PNAS, 2016: https://doi.org/10.1073/pnas.1602413113
- Genomic data silently altered: approximately 30% of examined papers with supplementary gene lists contained gene-name errors. PLOS, 2021: https://doi.org/10.1371/journal.pcbi.1008984
- Shared code would not run: 74% of more than 9,000 shared R files failed initial execution in a clean environment. Scientific Data, 2022: https://doi.org/10.1038/s41597-022-01143-6
- Invalid tests reached patients: invalid omics-based predictors were used in three Duke cancer clinical trials. IOM, 2012: https://www.ncbi.nlm.nih.gov/books/NBK202172/
- Researchers lost access: a ransomware attack removed access to most British Library online systems. British Library, 2024: https://www.bl.uk/stories/blogs/posts/learning-lessons-from-the-cyber-attack
- AI invented dependencies: code LLMs generated 205,474 unique nonexistent package names. Spracklen et al., 2024: https://arxiv.org/abs/2406.10279
-->

<div class="map-takeaway">Research harm due to software is real—and documented in the public record.</div>

<div class="news-grid">
  <div class="news-card">
    <img src="assets/news-coverage/fmri-wired.jpg" alt="WIRED article artwork showing a brain scan">
    <div class="news-copy"><small>WIRED · 2016</small><strong>Bug in fMRI software calls 15 years of research into question</strong><span>False-positive rates reached 70%.</span></div>
  </div>
  <div class="news-card">
    <img src="assets/news-coverage/genomics-nature.jpg" alt="Nature article artwork about spreadsheet gene-name errors">
    <div class="news-copy"><small>Nature · 2021</small><strong>Spreadsheet errors silently corrupted published gene lists</strong><span>About 30% of examined papers contained gene-name errors.</span></div>
  </div>
  <div class="news-card">
    <img src="assets/news-coverage/code-scientific-data.png" alt="Scientific Data article figure about research code execution">
    <div class="news-copy"><small>Scientific Data · 2022</small><strong>Shared analysis code could not be rerun</strong><span>74% of tested R files failed in a clean environment.</span></div>
  </div>
  <div class="news-card">
    <img src="assets/news-coverage/duke-nature.jpg" alt="Duke University campus accompanying Nature coverage">
    <div class="news-copy"><small>Nature News · 2011</small><strong>Invalid predictors reached patients in three cancer trials</strong><span>Research errors crossed into patient-facing studies.</span></div>
  </div>
  <div class="news-card">
    <img src="assets/news-coverage/british-library.jpg" alt="British Library exterior accompanying cyber-attack coverage">
    <div class="news-copy"><small>Nature · 2024</small><strong>Cyberattack cut researchers off from national collections</strong><span>Research access was disrupted for months.</span></div>
  </div>
  <div class="news-card">
    <img src="assets/news-coverage/ai-usenix.png" alt="USENIX article artwork about package hallucinations">
    <div class="news-copy"><small>USENIX · 2025</small><strong>AI-generated code pointed users to nonexistent packages</strong><span>Models invented 205,474 unique dependency names.</span></div>
  </div>
</div>

---

<!-- _class: risk hazard-focus -->

<div class="thread"><span class="hazard active"><b>◇</b>Hazard</span><span class="harm"><b>!</b>Harm</span><span class="control"><b>◆</b>Control</span><span class="evidence"><b>✓</b>Evidence</span></div> 

## Why Research-Software Risk Recurs

<!--
Thread statement: Combine the scientific-assumption tension and recurring research conditions into one explanation of where software hazards come from.

- Researchers narrow a problem deliberately to isolate a phenomenon. This is sound scientific reasoning, not a mistake.
- The hazard emerges when software travels beyond the data, environment, user, scale, or purpose for which those assumptions were valid.
- Root conditions are not failures of commitment or intelligence. They describe the normal environment in which research software is created.
- Walk through the six visible conditions in the same order as the slide: evolving research, concentrated knowledge, limited capacity, temporary funding, prototype reuse, and AI acceleration.
- The connecting lines matter: these conditions often interact, so a local assumption or temporary shortcut can become a system-level hazard as the research evolves.
- Use the backup slide only when a different audience needs alternative conditions such as interdisciplinary communication, delivery pressure, changing dependencies, growing scale, or fragmented ownership.
- Transition: "Those hazards do not remain inside the software. The research program bears the consequences."
-->

<div class="map-takeaway">Risk appears when software outlives its original assumptions.</div>

<div class="risk-side-map">
  <div class="risk-side-column left">
    <div class="risk-side-card"><strong>Evolving research</strong><span>Data, methods, and questions change.</span></div>
    <div class="risk-side-card"><strong>Concentrated knowledge</strong><span>Assumptions remain with one person.</span></div>
    <div class="risk-side-card"><strong>Temporary funding</strong><span>Maintenance ends before use does.</span></div>
  </div>

  <img src="assets/generated/risk-ecosystem.png" alt="Six connected sources of research-software risk">

  <div class="risk-side-column right">
    <div class="risk-side-card"><strong>Limited capacity</strong><span>Testing and verification stay incomplete.</span></div>
    <div class="risk-side-card"><strong>Prototype reuse</strong><span>One-time code becomes infrastructure.</span></div>
    <div class="risk-side-card"><strong>AI acceleration</strong><span>Production outruns validation.</span></div>
  </div>
</div>

---

<!-- _class: risk harm-focus -->

<div class="thread"><span class="hazard"><b>◇</b>Hazard</span><span class="harm active"><b>!</b>Harm</span><span class="control"><b>◆</b>Control</span><span class="evidence"><b>✓</b>Evidence</span></div>

## When Software Hazards Materialize, Research Bears the Cost.

<!--
Thread statement: Establish that the consequences are real, then show how AI increases the rate and reach of the exposure.

- Keep the distinction clear: a hazard is the potential for failure; harm is the consequence to the research program.
- Follow the four visible consequences: validity, reproducibility, research time, and continuity.
- Validity: incorrect behavior can alter data, rankings, or conclusions.
- Reproducibility: environments, workflows, or undocumented assumptions can prevent verification and extension.
- Research time: diagnosis, repair, and rebuilding displace discovery.
- Continuity: essential tools and concentrated knowledge can disappear when funding, people, or systems change.
- AI is an amplifier rather than a separate category of harm: it increases the speed, volume, and apparent credibility of software that still requires validation.
- Connect these categories back to the documented cases on Slide 2 rather than introducing new examples here.
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

<div class="map-takeaway">Software failures become research consequences.</div>

<div class="annotation-map corner">
  <div class="annotation-row two top">
    <div class="annotation-card"><strong>Validity</strong><span>Incorrect software can change conclusions.</span></div>
    <div class="annotation-card"><strong>Reproducibility</strong><span>Results become difficult to verify or extend.</span></div>
  </div>

  <img src="assets/generated/research-harms.png" alt="Fragile research software causing invalid conclusions, irreproducibility, lost time, and lost investment">

  <div class="annotation-row two">
    <div class="annotation-card"><strong>Research time</strong><span>Diagnosis and rebuilding displace discovery.</span></div>
    <div class="annotation-card"><strong>Continuity</strong><span>Essential tools and knowledge disappear.</span></div>
  </div>
</div>

---

<!-- _class: mitigate -->

<div class="thread"><span class="hazard"><b>◇</b>Hazard</span><span class="harm"><b>!</b>Harm</span><span class="control active"><b>◆</b>Control</span><span class="evidence"><b>✓</b>Evidence</span></div>

## CSSE Provides the Engineering Judgment Research Teams Need

<!--
Thread statement: CSSE's value is not a checklist of controls; it is practiced RSE judgment about which response is appropriate, sufficient, and sustainable.

- Follow the same four-part order as the previous slide: validity, reproducibility, research time, and continuity.
- Validity: judgment identifies which assumptions and outputs are consequential enough to require tests, traceability, or independent verification.
- Reproducibility: judgment determines what must be captured—and what evidence is sufficient—for others to verify and extend the work.
- Research time: judgment right-sizes architecture, automation, testing, and recovery to the consequence, maturity, users, and expected lifespan.
- Continuity: judgment anticipates the ownership, operational, documentation, and handoff model the research will actually need.
- Researchers bring deep scientific and domain judgment. They are not expected to build broad engineering pattern recognition while remaining focused on discovery.
- RSEs focus on exactly this work across projects and over time. That repeated exposure makes difficult-to-build engineering judgment available to the research team.
- AI is valuable implementation leverage. It does not own the research context, accept accountability, negotiate tradeoffs, or decide what evidence is sufficient.
- This slide should answer why CSSE is the partner. Later slides show the techniques and evidence as proof.
- Transition: "The example that follows shows this judgment in practice: identifying the consequential risks, applying proportionate controls, and making the evidence inspectable."
-->

<div class="map-takeaway">Researchers bring scientific judgment. RSEs choose and right-size the engineering response.</div>

<div class="annotation-map corner">
  <div class="annotation-row two top">
    <div class="annotation-card"><strong>Protect validity</strong><span>Identify which assumptions and results require evidence.</span></div>
    <div class="annotation-card"><strong>Enable reproducibility</strong><span>Decide what must be captured to verify and extend.</span></div>
  </div>

  <img src="assets/generated/csse-judgment.png" alt="Research discovery connected to durable software through proportionate engineering judgment">

  <div class="annotation-row two">
    <div class="annotation-card"><strong>Preserve research time</strong><span>Right-size prevention, automation, and recovery.</span></div>
    <div class="annotation-card"><strong>Sustain continuity</strong><span>Design ownership and handoff for the expected lifespan.</span></div>
  </div>
</div>


---

<!-- _class: example -->

<div class="thread"><span class="hazard active"><b>◇</b>Hazard</span><span class="harm active"><b>!</b>Harm</span><span class="control"><b>◆</b>Control</span><span class="evidence"><b>✓</b>Evidence</span></div>

## CSSE Identified the Risks That Matter for This Pilot

<!--
Thread statement: Make the first act of judgment visible: CSSE selected the three risks that could materially affect credible research use and the next investment decision.

- iNaturalist provides the motivating scale: more than 300 million observations and continued growth. INQUIRE is the concrete evaluation setting, with 250 expert information needs over the 5-million-image iNat24 collection.
- Keep those numbers distinct: 300 million describes the broader iNaturalist context; 5 million describes the benchmark collection used by INQUIRE.
- The goal is to enable INQUIRE-like natural-language search over iNaturalist data, including descriptions of behavior, habitat, or visual relationships that a species label alone may not capture.
- Many engineering concerns are possible. CSSE did not treat them as equally consequential or attempt to solve all of them.
- Consistency risk: rankings can shift as data and software change, shaping which examples a researcher sees and potentially influencing interpretation.
- Freshness risk: new observations must enter the index quickly and predictably or the search view falls behind the underlying collection.
- Growth risk: increasing data volume should not force the team to rebuild ingestion, indexing, search, or recovery workflows.
- Transition: "These three risks determine the controls shown in the demo; everything else is deliberately out of scope."
-->

<div class="map-takeaway">Engagement challenge: apply INQUIRE’s expert-query approach to iNaturalist’s 300M+ observations.</div>

<div class="side-annotation-map">
  <img class="visual-risk" src="assets/generated/inquire-risks.png" alt="Biodiversity image search facing consistency, freshness, and growth risks">

  <div class="side-callouts">
    <div class="annotation-card"><strong>Does search remain consistent?</strong><span>Weak rankings can shape interpretation. New data can skew results.</span></div>
    <div class="annotation-card"><strong>Does search remain fresh?</strong><span>New observations should enter the index quickly and predictably.</span></div>
    <div class="annotation-card"><strong>Can it grow?</strong><span>Increasing volume should not require rebuilding.</span></div>
  </div>
</div>


---

<!-- _class: mitigate -->

<div class="thread"><span class="hazard"><b>◇</b>Hazard</span><span class="harm"><b>!</b>Harm</span><span class="control active"><b>◆</b>Control</span><span class="evidence"><b>✓</b>Evidence</span></div>

## CSSE Right-Sized Controls to the Selected Risks

<!--
Thread statement: Make the second act of judgment visible: CSSE chose the lightest controls that make the selected risks manageable and inspectable for a pilot.

- For consistency, run representative queries and show both the ranked images and retrieval metrics. Repeat the same query set after changes so quality shifts are visible rather than anecdotal.
- For freshness, append a new batch, update the index, and confirm that the new observations are searchable with their source metadata intact.
- For controlled growth, use repeatable batch ingestion, reruns, recovery paths, and measured throughput and latency so expansion does not require rebuilding the workflow.
- These controls are proportionate to a pilot. Production SLOs, full-scale resilience, and operational hardening are deliberately deferred until evidence justifies that investment.
- Call out the operational controls behind the interface: repeatable scripts, explicit recovery paths, and documented deployment comparisons reduce dependence on one developer or environment.
- If the live system is unavailable, use the recorded fallback and narrate the same checkpoints. The evidence should survive the demo format.
- Transition: "The controls are visible; the next question is what the current evidence actually proves."
-->

<div class="map-takeaway">Enough control for a credible pilot without prematurely building a production service.</div>

<div class="side-annotation-map">
  <img class="visual-controls" src="assets/generated/inquire-controls.png" alt="Biodiversity image search moving through consistency, refresh, and growth controls">

  <div class="side-callouts">
    <div class="annotation-card"><strong>Keep search consistent</strong><span>Fixed queries, rankings, metrics, and thresholds.</span></div>
    <div class="annotation-card"><strong>Keep results fresh</strong><span>Append data, refresh the index, and preserve source context.</span></div>
    <div class="annotation-card"><strong>Grow without rebuilding</strong><span>Repeatable batches, measured behavior, and recovery paths.</span></div>
  </div>
</div>


---

<!-- _class: value -->

<div class="thread"><span class="hazard"><b>◇</b>Hazard</span><span class="harm"><b>!</b>Harm</span><span class="control"><b>◆</b>Control</span><span class="evidence active"><b>✓</b>Evidence</span></div>

## CSSE Defined What the Current Evidence Can Support

<!--
Thread statement: Make the third act of judgment visible: CSSE defines what evidence is sufficient for the next decision and prevents the team from overclaiming.

- Read the cards as evidence for the three concerns introduced on Slide 6: consistency, freshness, and growth.
- Consistency: precision at 10 asks how many of the first ten results are relevant; NDCG at 10 also rewards placing the most relevant results higher in the ranking. Together they establish a repeatable quality baseline.
- Freshness: the 24-to-48-vector append demonstrates that new data can enter the same search workflow and become queryable without rebuilding the index from scratch.
- Controlled growth: ingestion throughput, p95 search latency, repeatable recovery, and deployment comparisons make scaling behavior visible and revisitable.
- The checked-in benchmark reports 418 ms p95 search latency: data/evidence/benchmark-summary.json.
- Be explicit about the boundary of the claim: these are demo measurements from a limited test setup. They are evidence that the controls work, not production service-level objectives or proof of quantified risk reduction.
- The investment implication is conditional: this evidence can justify a pilot, while a production service would require larger-scale validation, agreed thresholds, monitoring, and operational ownership.
- The checked-in benchmark values are curated presentation evidence. The final raw benchmark export remains an evidence gap and should be captured before treating them as a new benchmark run.
- Production-readiness controls are a target operating model derived from the source architecture and demo assumptions; they are not evidence of a deployed production service.
- Transition: use the strength of the evidence—and the remaining uncertainty—to decide the next bounded increment.
-->

<div class="map-takeaway">The evidence supports a pilot not production readiness or quantified risk reduction.</div>

<div class="side-annotation-map">
  <img class="visual-evidence" src="assets/generated/evidence-boundary.png" alt="Prototype evidence supporting a pilot, with production beyond the current evidence boundary">

  <div class="side-callouts">
    <div class="annotation-card"><strong>Quality changes are detectable</strong><span>0.72 P@10 / 0.81 NDCG@10 establish a repeatable baseline.</span></div>
    <div class="annotation-card"><strong>The refresh path works</strong><span>24 → 48 vectors; appended data became searchable.</span></div>
    <div class="annotation-card"><strong>Runtime remains measurable</strong><span>418 ms p95; behavior and recovery can be evaluated.</span></div>
  </div>
</div>


---

<!-- _class: team 

<div class="thread"><span class="hazard"><b>◇</b>Hazard</span><span class="harm"><b>!</b>Harm</span><span class="control"><b>◆</b>Control</span><span class="evidence"><b>✓</b>Evidence</span></div>-->

## The Team Behind the Controls

<div class="map-takeaway">Leadership, engineering, and operations make the controls durable beyond a single project.</div>

<div class="team-layout">
  <div class="team-cluster leadership">
    <strong>Leadership</strong>
    <div class="cluster-grid">
      <div class="person-card"><div class="person-photo rich"></div><div><strong>Rich Vuduc</strong><span>SSE Co-director</span></div></div>
      <div class="person-card"><div class="person-photo jeffrey"></div><div><strong>Jeffrey Young</strong><span>SSE Co-director</span></div></div>
    </div>
  </div>
  <div class="team-cluster operations">
    <strong>Engineering + Operations</strong>
    <div class="cluster-grid">
      <div class="person-card"><div class="person-photo dave"></div><div><strong>Dave Brownell</strong><span>Head of Engineering</span></div></div>
      <div class="person-card"><div class="person-photo ketan"></div><div><strong>Ketan Bhardwaj</strong><span>Senior RSE</span></div></div>
      <div class="person-card"><div class="person-photo robert"></div><div><strong>Robert Bates</strong><span>Senior RSE</span></div></div>
      <div class="person-card"><div class="person-photo nirvana"></div><div><strong>Nirvana Edwards</strong><span>Programs &amp; Ops</span></div></div>
    </div>
  </div>
</div>

<div class="capability-row">
  <span>Software engineering</span><span>Architecture</span><span>Product + program</span><span>UI/UX</span><span>Technical writing</span>
</div>

<!--
Thread statement: Answer "Who is GT CSSE?" immediately after the example has demonstrated the team's judgment, controls, and evidence.

- Present the team as the professional capability behind the example, not as an unrelated roster.
- Team roster and source images: https://ssecenter.cc.gatech.edu/people/
- Transition: "This is the team that can bring the same risk-informed engineering judgment to the next research challenge."
-->

---

<!-- _class: cta -->

# Protect the Research Outcome Before Software Risk Compounds.

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
  <div class="card hazard"><span class="icon">◇</span><h3>Surface the hazard</h3><p>Where could assumptions or software fail?</p></div>
  <div class="card harm"><span class="icon">!</span><h3>Name the harm</h3><p>What would the research program lose?</p></div>
  <div class="card control engage"><span class="icon">◆</span><h3>Engage CSSE early</h3><p>Choose a proportionate engineering control.</p></div>
  <div class="card evidence"><span class="icon">✓</span><h3>Prove the control works</h3><p>Use evidence to demonstrate effectiveness.</p></div>
  <div class="card decision"><span class="icon">→</span><h3>Protect the outcome</h3><p>Trustworthy results · reproducible work · durable investment</p></div>
</div>

**Start with one consequential workflow. CSSE will help define the risk, the right-sized control, and the evidence needed to proceed.**

---

<!-- _class: backup -->

# Backup

Supporting information for discussion

<!-- Thread statement: Use the backup material to answer questions without interrupting the main hazard-to-outcome narrative. -->

---

<!-- _class: risk -->

<div class="thread"><span class="hazard"><b>◇</b>Hazard</span><span class="harm active"><b>!</b>Harm</span><span class="control"><b>◆</b>Control</span><span class="evidence active"><b>✓</b>Evidence</span></div>

## Alternative: The Public Record

<!--
- This alternative visual treatment stays in backup. Keep the main Slide 2 unchanged.
- Use two or three items suited to the audience rather than narrating all six.
- Each card uses authentic publisher artwork paired with the exact public headline or article title.
- Sources:
  - WIRED, "Bug in fMRI software calls 15 years of research into question": https://www.wired.com/story/fmri-bug-brain-scans-results/
  - Nature, "Autocorrect errors in Excel still creating genomics headache": https://www.nature.com/articles/d41586-021-02211-4
  - Scientific Data, "A large-scale study on research code quality and execution": https://www.nature.com/articles/s41597-022-01143-6
  - Nature News Blog, "Report reveals missteps in Duke cancer trial review": https://blogs.nature.com/blog/report_reveals_missteps_in_ini/
  - Nature, "Cyberattacks on knowledge institutions are increasing: what can be done?": https://www.nature.com/articles/d41586-024-00323-1
  - USENIX, "Package Hallucinations: How LLMs Can Invent Vulnerabilities": https://www.usenix.org/publications/loginonline/we-have-package-you-comprehensive-analysis-package-hallucinations-code
-->

<div class="map-takeaway">Observed harms span validity, reproducibility, continuity, and AI-assisted development.</div>

<div class="evidence-grid">
  <div class="evidence-block">
    <img src="assets/generated/public-evidence-blocks/fmri.png" alt="Brain scan illustrating invalid fMRI inference">
    <div class="evidence-copy"><strong>fMRI inference</strong><span>Common methods produced false-positive rates up to <strong>70%</strong>.</span><small>PNAS · 2016</small></div>
  </div>
  <div class="evidence-block">
    <img src="assets/generated/public-evidence-blocks/genomic-data.png" alt="Spreadsheet illustrating altered genomic data">
    <div class="evidence-copy"><strong>Genomic data</strong><span>Spreadsheet behavior silently converted gene names into dates.</span><small>PLOS · 2021</small></div>
  </div>
  <div class="evidence-block">
    <img src="assets/generated/public-evidence-blocks/shared-code.png" alt="Code window illustrating failed execution">
    <div class="evidence-copy"><strong>Shared code</strong><span><strong>74%</strong> of tested R files failed initial execution.</span><small>Scientific Data · 2022</small></div>
  </div>
  <div class="evidence-block">
    <img src="assets/generated/public-evidence-blocks/clinical-trials.png" alt="Clinical test illustrating invalid predictors">
    <div class="evidence-copy"><strong>Clinical trials</strong><span>Invalid omics-based predictors were used in three cancer trials.</span><small>IOM · 2012</small></div>
  </div>
  <div class="evidence-block">
    <img src="assets/generated/public-evidence-blocks/research-access.png" alt="Locked digital archive illustrating interrupted access">
    <div class="evidence-copy"><strong>Research access</strong><span>Ransomware removed access to most British Library online systems.</span><small>British Library · 2024</small></div>
  </div>
  <div class="evidence-block">
    <img src="assets/generated/public-evidence-blocks/ai-dependencies.png" alt="AI-generated code illustrating invented dependencies">
    <div class="evidence-copy"><strong>AI dependencies</strong><span>Code models generated <strong>205,474</strong> unique nonexistent package names.</span><small>Spracklen et al. · 2024</small></div>
  </div>
</div>

---

<!-- _class: risk -->

<div class="thread"><span class="hazard"><b>◇</b>Hazard</span><span class="harm active"><b>!</b>Harm</span><span class="control"><b>◆</b>Control</span><span class="evidence active"><b>✓</b>Evidence</span></div>

## Backup: Software Errors That Led to Retractions

<!--
- Use these cases to show that small research-software and data-processing errors can invalidate conclusions across disciplines.
- Distinguish programming defects from data-coding errors; "coding error" does not always mean a defect in source code.
- [Sources]
  - Retraction Watch, climate-analysis coding error: https://retractionwatch.com/2015/04/09/stats-error-has-chilling-effect-on-global-warming-paper/
  - Retraction Watch, pediatric long-COVID coding errors: https://retractionwatch.com/2024/08/20/coding-errors-prompt-retraction-of-paper-on-long-covid-in-kids/
  - Retraction Watch, fake-news software bug and erroneous data: https://retractionwatch.com/2019/01/09/oft-quoted-paper-on-spread-of-fake-news-turns-out-to-befake-news/
  - Retraction Watch, auditory-psychology script error: https://retractionwatch.com/2019/08/13/doing-the-right-thing-psychology-researchers-retract-paper-three-days-after-learning-of-coding-error/
  - Retraction Watch, EPA variable-coding error: https://retractionwatch.com/2013/01/04/paper-on-evidence-for-environmental-racism-in-epa-polluter-fines-retracted-for-coding-error/
  - Retraction Watch, one-line cancer-study programming error: https://retractionwatch.com/2016/09/26/coding-error-sinks-cancer-study/
-->

<div class="map-takeaway">Small defects can erase conclusions across climate, health, psychology, and social science.</div>

<div class="retraction-grid">
  <div class="retraction-card"><img src="assets/generated/retraction-cases/climate-code.png" alt="Mountain plants beside faulty analysis code"><div class="retraction-copy"><small>Climate · analysis code</small><strong>Code created an apparent downward species shift</strong><span>The null-model error invalidated a major conclusion.</span></div></div>
  <div class="retraction-card"><img src="assets/generated/retraction-cases/long-covid-data.png" alt="Child health data routed into an incorrect category"><div class="retraction-copy"><small>Child health · data processing</small><strong>Long-COVID incidence was understated</strong><span>Correction changed the estimate from 0.4% to 1.4%.</span></div></div>
  <div class="retraction-card"><img src="assets/generated/retraction-cases/fake-news-model.png" alt="Social media model with software bug warning"><div class="retraction-copy"><small>Social media · software + data</small><strong>A fake-news conclusion became unsupported</strong><span>A software bug and erroneous inputs broke the model claim.</span></div></div>
  <div class="retraction-card"><img src="assets/generated/retraction-cases/psychology-script.png" alt="Auditory experiment with a broken script"><div class="retraction-copy"><small>Psychology · experiment script</small><strong>A script error invalidated experimental effects</strong><span>Prior-trial fluency was coded incorrectly.</span></div></div>
  <div class="retraction-card"><img src="assets/generated/retraction-cases/epa-coding.png" alt="Swapped binary values beside an environmental enforcement chart"><div class="retraction-copy"><small>Environmental justice · data coding</small><strong>Reversed values voided the EPA analysis</strong><span>Correcting the binary variable changed the findings.</span></div></div>
  <div class="retraction-card"><img src="assets/generated/retraction-cases/cancer-code.png" alt="Cancer research microscopy beside a faulty line of code"><div class="retraction-copy"><small>Cancer research · program logic</small><strong>One faulty line caused a study retraction</strong><span>The defect changed calculated results.</span></div></div>
</div>

---

<!-- _class: risk hazard-focus -->

<div class="thread"><span class="hazard active"><b>◇</b>Hazard</span><span class="harm"><b>!</b>Harm</span><span class="control"><b>◆</b>Control</span><span class="evidence"><b>✓</b>Evidence</span></div>

## Backup: Additional Condition-to-Hazard Mappings

<!--
- These six cards are alternatives for the six visible cards on Slide 3, not additional main-story content.
- Select only the mappings relevant to the director or research program.
- Interdisciplinary communication: requirements, provenance, and failure boundaries are interpreted differently across teams.
- Publication and delivery pressure: short-term results defer validation, documentation, and maintainability.
- Performance pressure: narrow optimization creates complex, platform-dependent implementations.
- Changing dependencies: environments drift and previously repeatable workflows stop working.
- Growing data and user scale: ingestion, performance, cost, and recovery behavior become brittle.
- Fragmented ownership: maintenance, security, incidents, and handoffs have no accountable owner.
-->

<div class="map-takeaway">Six alternatives for tailoring the conversation to the research context.</div>

<div class="risk-map">
  <div class="risk-callout top left"><strong>Interdisciplinary communication</strong><span>Teams interpret requirements differently.</span></div>
  <div class="risk-callout top center"><strong>Delivery pressure</strong><span>Short-term results defer validation.</span></div>
  <div class="risk-callout top right"><strong>Performance pressure</strong><span>Narrow optimization increases complexity.</span></div>

  <img src="assets/generated/backup-hazards.png" alt="Six additional research-software conditions and their hazards">

  <div class="risk-callout bottom left"><strong>Changing dependencies</strong><span>Environment drift breaks workflows.</span></div>
  <div class="risk-callout bottom center"><strong>Growing scale</strong><span>Data and users stress brittle pipelines.</span></div>
  <div class="risk-callout bottom right"><strong>Fragmented ownership</strong><span>No one owns maintenance and handoff.</span></div>
</div>
