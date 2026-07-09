# Slides

The slide sources are Marp-flavored Markdown files. Render them with
`@marp-team/marp-cli` through `npx` so a local Marp install is not required.
The deck references tracked visual assets in `slides/assets/`, so export
commands include `--allow-local-files`.

## Prerequisites

- Node.js/npm for `npx`.
- LibreOffice for PowerPoint export. Marp CLI uses the `soffice` binary when
  converting to `.pptx`; Microsoft PowerPoint alone does not provide that
  converter.

On macOS with Homebrew:

```bash
brew install --cask libreoffice
```

## Render HTML

From the repository root:

```bash
npx --yes @marp-team/marp-cli \
  slides/inat-inquire-demo.marp.md \
  --allow-local-files \
  --output slides/inat-inquire-demo.marp.html
```

From this `slides/` folder:

```bash
npx --yes @marp-team/marp-cli \
  inat-inquire-demo.marp.md \
  --allow-local-files \
  --output inat-inquire-demo.marp.html
```

The `.html` output extension tells Marp CLI to write an HTML deck. The `--html`
flag has a different meaning: it enables raw HTML tags inside slide Markdown
when a deck needs them.

## Export PowerPoint

Yes. Marp CLI exports PowerPoint as `.pptx`. This requires LibreOffice's
`soffice` binary to be installed and discoverable on `PATH`:

```bash
npx --yes @marp-team/marp-cli \
  slides/inat-inquire-demo.marp.md \
  --pptx \
  --pptx-editable \
  --allow-local-files \
  --output slides/inat-inquire-demo.pptx
```

For a rasterized fallback export, omit `--pptx-editable`. That mode is more
visually exact but turns slide content into uneditable images.

```bash
npx --yes @marp-team/marp-cli \
  slides/inat-inquire-demo.marp.md \
  --pptx \
  --allow-local-files \
  --output slides/inat-inquire-demo.rasterized.pptx
```

If Marp reports `LibreOffice soffice binary could not be found` on macOS after
installing LibreOffice, run the command with LibreOffice on `PATH`:

```bash
PATH="/opt/homebrew/bin:/Applications/LibreOffice.app/Contents/MacOS:$PATH" \
npx --yes @marp-team/marp-cli \
  slides/inat-inquire-demo.marp.md \
  --pptx \
  --pptx-editable \
  --allow-local-files \
  --output slides/inat-inquire-demo.pptx
```

## Other Useful Exports

PDF:

```bash
npx --yes @marp-team/marp-cli \
  slides/inat-inquire-demo.marp.md \
  --pdf \
  --allow-local-files \
  --output slides/inat-inquire-demo.pdf
```

PNG image of the first slide:

```bash
npx --yes @marp-team/marp-cli \
  slides/inat-inquire-demo.marp.md \
  --image png \
  --allow-local-files \
  --output slides/inat-inquire-demo.png
```

PNG images for every slide:

```bash
npx --yes @marp-team/marp-cli \
  slides/inat-inquire-demo.marp.md \
  --images png \
  --allow-local-files \
  --output slides/inat-inquire-demo
```
