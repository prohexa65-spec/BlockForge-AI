import { createPackManifests } from "../src/core/manifest.js";
import { validateManifest } from "../src/core/validate.js";

let generated = null;
const byId = (id) => document.getElementById(id);
const pretty = (value) => JSON.stringify(value, null, 2);

function renderValidation(results) {
  const target = byId("validation");
  const messages = [
    ...results.flatMap((r) => r.errors.map((m) => ({ type: "error", text: m }))),
    ...results.flatMap((r) => r.warnings.map((m) => ({ type: "warning", text: m })))
  ];
  if (!messages.length) {
    target.innerHTML = '<p class="success">✓ Both manifests passed the starter checks.</p>';
    return;
  }
  target.replaceChildren(...messages.map(({ type, text }) => {
    const p = document.createElement("p");
    p.className = type;
    p.textContent = (type === "error" ? "Error: " : "Warning: ") + text;
    return p;
  }));
}

byId("generate").addEventListener("click", () => {
  try {
    generated = createPackManifests({
      name: byId("name").value,
      description: byId("description").value,
      version: byId("version").value,
      minEngineVersion: byId("engine").value
    });
    byId("bp-output").textContent = pretty(generated.behavior);
    byId("rp-output").textContent = pretty(generated.resource);
    const results = [
      validateManifest(generated.behavior, "Behavior Pack"),
      validateManifest(generated.resource, "Resource Pack")
    ];
    renderValidation(results);
    const hasErrors = results.some((r) => r.errors.length);
    byId("status").textContent = hasErrors ? "Needs attention" : "Validated";
    document.querySelectorAll("[data-download]").forEach((button) => button.disabled = hasErrors);
  } catch (error) {
    generated = null;
    byId("status").textContent = "Could not generate";
    byId("validation").textContent = error.message;
    document.querySelectorAll("[data-download]").forEach((button) => button.disabled = true);
  }
});

function downloadJson(filename, value) {
  const blob = new Blob([pretty(value)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

document.querySelectorAll("[data-download]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!generated) return;
    const type = button.dataset.download;
    downloadJson(type === "bp" ? "behavior_pack-manifest.json" : "resource_pack-manifest.json",
      type === "bp" ? generated.behavior : generated.resource);
  });
});
