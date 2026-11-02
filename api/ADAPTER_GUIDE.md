# Universal API adapter guide

## Goal

Connect any AI that supports tool/function calling or HTTP requests to one shared BlockForge contract. Provider-specific code should only translate tool schemas and tool results; it should not contain Minecraft-generation logic.

## Request flow

1. Ask the model to plan the add-on and identify which repository files it needs.
2. Give the model the tool schemas from examples/tool-definitions.json.
3. When the model requests a tool, send its name and arguments to POST /v1/tools/call.
4. Return the JSON response to the model as the matching tool result.
5. Ask the model to explain validation errors and revise its proposed files.
6. Keep project writes and packaging behind a later, separately reviewed backend milestone.

## Shared call envelope

Request body:

{
  "name": "read_repo_file",
  "arguments": {
    "path": "src/core/manifest.js"
  }
}

A successful tool call returns:

{
  "ok": true,
  "name": "read_repo_file",
  "result": {
    "path": "src/core/manifest.js",
    "content": "..."
  }
}

## Provider adapter responsibilities

- Convert each tool's JSON Schema into the AI provider's native function/tool format.
- Preserve tool names and argument names exactly.
- Validate that tool arguments are JSON before forwarding them.
- Send the result back to the same model turn as a tool result.
- Handle timeouts, 4xx/5xx responses, and retries without repeating a write action.
- Never expose the service credential to the model or browser logs.

## Important status note

The repository currently contains the API contract and shared tool definitions, not a deployed API server. The first backend implementation should provide the documented read and JSON-validation tools. Project submission, pull requests, Bedrock-aware validation, and .mcaddon packaging are separate future milestones.
