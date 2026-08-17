SHELL := /bin/bash
.SHELLFLAGS := -euo pipefail -c
.DEFAULT_GOAL := help

.PHONY: help bootstrap demo pipeline portal batch-2 down validate docker-build-base docker-build-demo docker-run-demo slides slides-pdf slides-pptx slides-docx record-large

help:
	@printf '%s\n' \
		'Targets:' \
		'  make bootstrap          Install local backend and portal dependencies' \
		'  make demo               Start pipeline, ingest batch 1, then run the portal' \
		'  make pipeline           Start source pipeline and ingest batch 1' \
		'  make portal             Run FastAPI backend and Vite portal' \
		'  make batch-2            Ingest the second live-demo image batch' \
		'  make down               Stop the source pipeline stack' \
		'  make validate           Run local validation checks' \
		'  make docker-build-base  Rebuild the source pipeline base image' \
		'  make docker-build-demo  Build the optional Dockerized demo service' \
		'  make docker-run-demo    Build and run the optional Dockerized demo service' \
		'  make slides             Export PDF, editable PowerPoint, and Word companion' \
		'  make slides-pdf         Export only the PDF deck' \
		'  make slides-pptx        Export PowerPoint and refresh the Word companion' \
		'  make slides-docx        Refresh Word from a newly built PowerPoint' \
		'  make record-large       Refresh optional large-run benchmark evidence'

bootstrap:
	./scripts/bootstrap.sh

demo: bootstrap pipeline portal

pipeline:
	./scripts/live-pipeline-up.sh

portal:
	./scripts/local-live.sh

batch-2:
	./scripts/live-ingest-batch.sh 2

down:
	./scripts/live-pipeline-down.sh

validate:
	./scripts/validate.sh

docker-build-base:
	source scripts/lib/common.sh; require_docker; set_pipeline_dir; build_pipeline_base_image

docker-build-demo:
	docker compose -f docker-compose.demo.yml build demo

docker-run-demo:
	docker compose -f docker-compose.demo.yml up --build demo

slides:
	./scripts/export-slides.sh all

slides-pdf:
	./scripts/export-slides.sh pdf

slides-pptx:
	./scripts/export-slides.sh pptx

slides-docx:
	./scripts/export-slides.sh docx

record-large:
	./scripts/record-large.sh
