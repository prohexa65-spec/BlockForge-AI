# BlockForge AI

**A mobile-friendly Minecraft Bedrock add-on maker and development toolkit.**

BlockForge AI helps creators plan, generate, validate, and package original **Minecraft Bedrock** add-ons. The first milestone focuses on safe, data-driven starter packs: Behavior Pack and Resource Pack manifests, UUID generation, pack metadata, JSON validation, and downloadable project files.

> Compatibility note: Bedrock features and Script API versions change over time. Check the target Minecraft version and official documentation before using a feature in a release.

## Project goals

- Prompt-to-project workflow: turn an idea into a structured add-on plan.
- Generate Behavior Pack (BP) and Resource Pack (RP) manifests.
- Create UUIDs and consistent module/dependency references.
- Validate JSON and common manifest mistakes before export.
- Keep templates modular, readable, and easy to extend.
- Work well on Android and desktop browsers.
- Support AI integrations without exposing API keys in client-side code.

## Current starter milestone

- [x] Repository foundation and contribution guide
- [x] Browser-based manifest builder
- [x] UUID generation
- [x] JSON/manifest validation
- [x] Download generated manifest files
- [x] GitHub Actions syntax/JSON checks
- [x] GitHub Pages deployment workflow
- [ ] Complete .mcaddon packaging
- [ ] Item, block, entity, recipe, and loot-table templates
- [ ] Resource-pack asset workflow
- [ ] Script API project generator
- [ ] Optional AI planner integration

## Publish the web app

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, set the source to **GitHub Actions**.
3. Open the **Actions** tab and run **Deploy BlockForge web app** if it has not started automatically.
4. When deployment finishes, the published URL will appear in the Pages settings and workflow summary.

The app is in the `web-app/` folder. For local development, serve the repository root with a static HTTP server; opening the HTML directly as a `file://` URL may block JavaScript modules.

## Repository layout

```text
web-app/       Mobile-first browser tools
src/           Reusable generator and validation modules
templates/     Bedrock pack templates (coming next)
docs/          Guides, compatibility notes, and roadmap
.github/       Automation workflows and issue templates
```

## AI builder design

The AI layer should **plan first, generate second, validate third**:

1. Convert the user's prompt into a structured feature plan.
2. Identify required pack files and supported Bedrock components.
3. Generate files from version-aware templates.
4. Run JSON and project-structure validation.
5. Explain warnings and ask before replacing existing files.
6. Package only after validation passes.

Keep provider API keys on a trusted server or secret store. Never commit keys, tokens, or private credentials. Review AI-generated files and test them in a separate Minecraft world before use.

## Scope

This toolkit focuses on creative, non-harmful add-on development such as custom blocks, decorative items, friendly creatures, farming, recipes, particles, ambience, structures, and UI experiments.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Include the target Bedrock version and relevant documentation links when adding a feature.

## License

MIT. See [LICENSE](LICENSE).
