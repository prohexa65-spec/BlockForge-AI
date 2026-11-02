# BlockForge AI

**A mobile-friendly Minecraft Bedrock add-on maker and development toolkit.**

BlockForge AI is designed to help creators plan, generate, validate, and package original **Minecraft Bedrock** add-ons. The first milestone focuses on safe, data-driven starter packs: behavior/resource pack manifests, UUID generation, pack metadata, JSON validation, and downloadable project files.

> Compatibility note: Bedrock features and Script API versions change over time. Always check the target Minecraft version and the official documentation before using a feature in a release.

## Project goals

- Prompt-to-project workflow: turn a clear idea into a structured add-on plan.
- Generate Behavior Pack (BP) and Resource Pack (RP) manifests.
- Create valid UUIDs and consistent module/dependency references.
- Validate JSON and common manifest mistakes before export.
- Keep templates modular, readable, and easy to extend.
- Work well on Android browsers as well as desktop browsers.
- Support AI integrations without exposing API keys in client-side code.

## Current starter milestone

- [x] Repository foundation and contribution guide
- [x] Browser-based manifest builder
- [x] UUID generation
- [x] JSON/manifest validation
- [x] Download generated manifest files
- [ ] Complete .mcaddon packaging
- [ ] Item, block, entity, recipe, and loot-table templates
- [ ] Resource-pack asset workflow
- [ ] Script API project generator
- [ ] Optional AI planner integration
- [ ] Automated compatibility test matrix

## Quick start

1. Open `web-app/index.html` in a modern browser, or enable GitHub Pages for the repository and open the published page.
2. Enter pack names, descriptions, and a version.
3. Generate the BP and RP manifests.
4. Download the JSON files and place them in the matching pack folders.
5. Validate the generated JSON before testing in Minecraft.

For local development, serve the repository root with any static HTTP server. The starter app has no build step.

## Repository layout

```text
web-app/       Mobile-first browser tools
src/           Reusable generator and validation modules
templates/     Minimal, documented Bedrock pack templates
docs/          Guides, compatibility notes, and roadmap
.github/       Automation workflows and issue templates
```

## AI builder design

The AI layer should **plan first, generate second, validate third**:

1. Convert the user's prompt into a structured feature plan.
2. Identify the required pack files and supported Bedrock components.
3. Generate files from version-aware templates.
4. Run JSON and project-structure validation.
5. Explain warnings and ask for confirmation before replacing existing files.
6. Package only after validation passes.

Keep provider API keys on a trusted server or secret store. Never commit keys, tokens, or private credentials. AI-generated files must be reviewed and tested in a separate Minecraft world before use.

## Safety and scope

This toolkit is for creative, non-harmful add-on development such as custom blocks, decorative items, friendly creatures, farming, recipes, particles, ambience, structures, and UI experiments. It is not intended to create real-world harmful instructions or facilitate dangerous activity.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Please include the target Bedrock version and relevant documentation links when adding a feature.

## License

MIT. See [LICENSE](LICENSE).
