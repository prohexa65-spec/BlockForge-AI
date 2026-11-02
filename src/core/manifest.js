import { createUuid } from "./uuid.js";

const clean = (value, fallback) => String(value ?? "").trim() || fallback;
const version = (value) => {
  const parts = String(value ?? "1.0.0").split(".").map(Number);
  if (parts.length !== 3 || parts.some((n) => !Number.isInteger(n) || n < 0)) {
    throw new Error("Version must use three non-negative numbers, for example 1.0.0.");
  }
  return parts;
};

export function createPackManifests(options = {}) {
  const name = clean(options.name, "BlockForge Starter");
  const description = clean(options.description, "A starter Minecraft Bedrock pack.");
  const packVersion = version(options.version);
  const minEngineVersion = version(options.minEngineVersion ?? "1.20.0");
  const bpHeaderUuid = createUuid();
  const rpHeaderUuid = createUuid();
  const bpModuleUuid = createUuid();
  const rpModuleUuid = createUuid();

  const behavior = {
    format_version: 2,
    header: { name: `${name} BP`, description, uuid: bpHeaderUuid, version: packVersion, min_engine_version: minEngineVersion },
    modules: [{ type: "data", uuid: bpModuleUuid, version: packVersion }]
  };
  const resource = {
    format_version: 2,
    header: { name: `${name} RP`, description, uuid: rpHeaderUuid, version: packVersion, min_engine_version: minEngineVersion },
    modules: [{ type: "resources", uuid: rpModuleUuid, version: packVersion }]
  };
  return { behavior, resource };
}
