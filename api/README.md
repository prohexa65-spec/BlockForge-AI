# BlockForge Universal API (v1)

A provider-neutral HTTP contract for AI systems that support tool/function calling or ordinary HTTP requests.

## Architecture

AI provider -> provider adapter -> BlockForge API -> BlockForge core and repository.

The provider adapter translates the shared tool definitions into the provider's native format. The model does not need to know provider-specific BlockForge logic.

## Contract files

- openapi.yaml: HTTP API contract.
- examples/tool-definitions.json: provider-neutral JSON Schema tool definitions.
- ADAPTER_GUIDE.md: how an AI client calls the shared tools.

## v1 tool set

- list_repo_files: discover files in the configured public repository.
- read_repo_file: read a UTF-8 text file from the configured public repository.
- validate_json: check JSON syntax.

These are the documented v1 tools. Project writing, branch creation, pull requests, full Bedrock schema validation, and .mcaddon packaging are future backend milestones and are not available through this contract yet.

## Deployment requirements

- Use HTTPS.
- Authenticate API requests.
- Restrict cross-origin access to the frontend that needs it.
- Add request size limits and rate limiting.
- Pin repository owner, name, and default branch in server configuration.
- Do not accept arbitrary repository URLs from model arguments.
- Keep any service credentials on the server, never in browser code or prompts.

## Current status

This repository contains the v1 API contract and provider-neutral tool schemas. It does not yet contain a deployed API service or hosted API URL. The next milestone is a secure backend that serves these endpoints, followed by project submission and packaging operations.
