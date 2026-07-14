SHELL := /bin/bash
.SHELLFLAGS := -euo pipefail -c
.DEFAULT_GOAL := help

.PHONY: help bootstrap demo demo-cached pipeline pipeline-cached portal batch-2 batch-2-cached down validate docker-build-base docker-build-demo docker-run-demo slides record-large

help:
	@printf '%s\n' \
		'Targets:' \
		'  make bootstrap          Install local backend and portal dependencies' \
		'  make demo               Start pipeline, ingest batch 1, then run the portal' \
		'  make demo-cached        Run the demo from a previously rehearsed local image cache' \
		'  make pipeline           Start source pipeline and ingest batch 1' \
		'  make portal             Run FastAPI backend and Vite portal' \
		'  make batch-2            Ingest the second live-demo image batch' \
		'  make batch-2-cached     Ingest cached batch 2 without HF/iNaturalist network access' \
		'  make down               Stop the source pipeline stack' \
		'  make validate           Run local validation checks' \
		'  make docker-build-base  Rebuild the source pipeline base image' \
		'  make docker-build-demo  Build the optional Dockerized demo service' \
		'  make docker-run-demo    Build and run the optional Dockerized demo service' \
		'  make slides             Export the slide deck' \
		'  make record-large       Refresh optional large-run benchmark evidence'

bootstrap:
	./scripts/bootstrap.sh

demo: bootstrap pipeline portal

demo-cached: bootstrap pipeline-cached portal

pipeline:
	./scripts/live-pipeline-up.sh

pipeline-cached:
	DEMO_HF_CACHED=1 ./scripts/live-pipeline-up.sh

portal:
	./scripts/local-live.sh

batch-2:
	./scripts/live-ingest-batch.sh 2

batch-2-cached:
	DEMO_HF_CACHED=1 ./scripts/live-ingest-batch.sh 2

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
	./scripts/export-slides.sh

record-large:
	./scripts/record-large.sh
