#!/usr/bin/env bash
# Build the native editable PowerPoint, matching PDF, and/or editable Word outline.
#
# Usage: ./scripts/export-slides.sh [all|pdf|pptx|docx]
set -euo pipefail

source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/lib/common.sh"

PDF_OUTPUT="${ROOT_DIR}/slides/exports/inat-inquire-demo.pdf"
PPTX_OUTPUT="${ROOT_DIR}/slides/inat-inquire-demo.pptx"
DOCX_OUTPUT="${ROOT_DIR}/slides/inat-inquire-demo-content.docx"
DOCX_TEMPLATE="${ROOT_DIR}/slides/templates/inat-word-rtemplate.docx"
BUILDER="${ROOT_DIR}/slides/build-slides.mjs"
DOCX_BUILDER="${ROOT_DIR}/scripts/build-slide-document.py"
DOCX_REQUIREMENTS="${ROOT_DIR}/scripts/requirements-slides.txt"
FORMAT="${1:-all}"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is required for slide export."
  exit 1
fi

case "${FORMAT}" in
  all|pdf|pptx|docx) ;;
  *)
    echo "Usage: $0 [all|pdf|pptx|docx]"
    exit 2
    ;;
esac

build_editable_pptx() {
  node "${BUILDER}"
}

build_editable_docx() {
  require_uv "to build the editable Word companion"
  "${UV_BIN}" run --with-requirements "${DOCX_REQUIREMENTS}" \
    python "${DOCX_BUILDER}" \
    --template "${DOCX_TEMPLATE}" \
    --pptx "${PPTX_OUTPUT}" \
    --output "${DOCX_OUTPUT}"
}

find_soffice() {
  if ! command -v soffice >/dev/null 2>&1; then
    local macos_libreoffice="/Applications/LibreOffice.app/Contents/MacOS"
    if [[ -x "${macos_libreoffice}/soffice" ]]; then
      export PATH="${macos_libreoffice}:${PATH}"
    else
      echo "LibreOffice's soffice binary is required for PDF export."
      echo "On macOS: brew install --cask libreoffice"
      exit 1
    fi
  fi
}

export_pdf() {
  find_soffice
  mkdir -p "$(dirname "${PDF_OUTPUT}")"
  soffice --headless --convert-to pdf --outdir "$(dirname "${PDF_OUTPUT}")" "${PPTX_OUTPUT}"
  echo "Exported ${PDF_OUTPUT}"
}

case "${FORMAT}" in
  all)
    build_editable_pptx
    build_editable_docx
    export_pdf
    ;;
  pdf)
    build_editable_pptx
    export_pdf
    ;;
  pptx)
    build_editable_pptx
    build_editable_docx
    ;;
  docx)
    build_editable_pptx
    build_editable_docx
    ;;
esac
