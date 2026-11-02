export function validateManifest(manifest, label = "Manifest") {
  const errors = [];
  const warnings = [];
  if (!manifest || typeof manifest !== "object" || Array.isArray(manifest)) {
    return { errors: [`${label}: expected a JSON object.`], warnings };
  }
  if (manifest.format_version !== 2) errors.push(`${label}: format_version should be 2 for this starter template.`);
  const header = manifest.header;
  if (!header || typeof header !== "object") errors.push(`${label}: missing header object.`);
  else {
    if (!header.name) errors.push(`${label}: header.name is required.`);
    if (!header.description) warnings.push(`${label}: header.description is empty.`);
    if (!isUuid(header.uuid)) errors.push(`${label}: header.uuid must be a valid UUID.`);
    if (!isVersion(header.version)) errors.push(`${label}: header.version must contain three non-negative integers.`);
    if (!isVersion(header.min_engine_version)) errors.push(`${label}: header.min_engine_version must contain three non-negative integers.`);
  }
  if (!Array.isArray(manifest.modules) || manifest.modules.length === 0) errors.push(`${label}: add at least one module.`);
  else manifest.modules.forEach((module, i) => {
    if (!isUuid(module.uuid)) errors.push(`${label}: modules[${i}].uuid must be a valid UUID.`);
    if (!isVersion(module.version)) errors.push(`${label}: modules[${i}].version must contain three non-negative integers.`);
    if (!module.type) errors.push(`${label}: modules[${i}].type is required.`);
  });
  return { errors, warnings };
}

export function isUuid(value) {
  return typeof value === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}
export function isVersion(value) {
  return Array.isArray(value) && value.length === 3 && value.every((n) => Number.isInteger(n) && n >= 0);
}
