# Slides

The production deck is built with native PowerPoint objects by
`slides/build-slides.mjs`. Text, numbers, lines, and layout elements remain
editable; raster illustrations and photographs remain movable image assets.

The Marp file is retained as a content and speaker-note reference. It is not
used for production PowerPoint export because Marp's editable conversion
fragments each slide into hundreds of difficult-to-edit shapes.

## Build

From the repository root:

```bash
make slides
```

This writes:

- `slides/inat-inquire-demo.pptx` — native editable PowerPoint
- `slides/exports/inat-inquire-demo.pdf` — PDF rendered from that PowerPoint
- `slides/inat-inquire-demo-content.docx` — editable, text-first Word companion

Use `make slides-pptx` to rebuild the PowerPoint and Word companion,
`make slides-docx` to explicitly refresh those two editable outputs, or
`make slides-pdf` when only the rendered PDF is needed. The Word builder reads
visible text and speaker notes directly from the generated PowerPoint package,
so changes flow into the companion on the next build. Stage labels, slide
numbers, and image-only artwork are left out intentionally. The Word companion
also includes slide-specific improvement questions for the CSSE director;
those editorial prompts are not added to the PowerPoint slides or notes.

## Generate an editable PowerPoint

The canonical slide source is [`build-slides.mjs`](./build-slides.mjs),
not the generated `.pptx` and not the Marp reference file. The builder creates
native PowerPoint text boxes, shapes, lines, images, and speaker notes with
`@oai/artifact-tool`.

1. Edit the presentation source in `slides/build-slides.mjs`:

   - Each numbered block such as `// 1 — Title` builds one slide.
   - `addHeader(...)` controls the title, subtitle, stage label, and page number.
   - `addText(...)` creates editable text boxes.
   - `addRightList(...)` creates editable numbered question/statement rows.
   - `addNotes(...)` writes editable presenter notes.
   - Raster artwork and photographs live under `slides/assets/`; they remain
     movable and replaceable images, but text drawn inside an image is not
     editable as PowerPoint text.

2. Generate the editable PowerPoint and Word companion:

   ```bash
   make slides-pptx
   ```

   For PowerPoint only, use the builder directly:

   ```bash
   node slides/build-slides.mjs
   ```

3. Open the generated file:

   ```text
   slides/inat-inquire-demo.pptx
   ```

   In PowerPoint, use **Home → Select → Selection Pane** to inspect and edit
   individual objects. Visible copy is stored in native text boxes, and the
   talk track is available through **View → Notes**.

4. Review the generated QA artifacts before sharing the deck:

   ```text
   slides/.codex-tmp/native-build-qa/montage.webp
   slides/.codex-tmp/native-build-qa/slide-01.png
   slides/.codex-tmp/native-build-qa/slide-01.layout.json
   ```

   The builder writes a PNG and layout JSON for every slide. Check the montage
   for deck-level consistency, then inspect changed slide PNGs at full size for
   clipping, overlap, unexpected wrapping, and image-crop problems.

Manual edits made directly in `slides/inat-inquire-demo.pptx` are useful for
experimentation, but the next build overwrites that file. Copy approved wording
or layout changes back into `slides/build-slides.mjs` so they remain
reproducible.

### What remains editable

| Element | PowerPoint behavior |
| --- | --- |
| Titles, subtitles, labels, questions, and body copy | Native editable text boxes |
| Numbers, rules, colored circles, and layout shapes | Native editable PowerPoint shapes |
| Presenter notes | Editable in the Notes pane |
| Charts created by the builder | Native editable chart objects |
| PNG/JPEG/SVG artwork and photographs | Movable and replaceable image objects; internal pixels/text are not editable |

Do not replace the native build with a rasterized PPTX export. A rasterized
deck may look correct, but each slide becomes a single image and its text can no
longer be edited.

## Prerequisites

- Node.js.
- `@oai/artifact-tool`, either installed in the project or available from the
  Codex presentation runtime.
- `uv`, which supplies the pinned `python-docx` dependency for Word export.
- LibreOffice only when producing the PDF. PowerPoint export itself does not
  require LibreOffice.

On macOS with Homebrew:

```bash
brew install --cask libreoffice
```

## Legacy Marp preview

The content-reference deck can still be previewed as HTML:

```bash
npx --yes @marp-team/marp-cli \
  slides/inat-inquire-demo.marp.md \
  --allow-local-files \
  --output slides/inat-inquire-demo.marp.html
```

Do not use Marp's PPTX export to replace the production deck; that conversion
does not preserve a practical editing experience.
