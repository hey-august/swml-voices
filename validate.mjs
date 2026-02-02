import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import yaml from "js-yaml";
import { readFileSync } from "fs";

// Load schema
const schema = JSON.parse(readFileSync("SWMLObject.json", "utf8"));

// Load SWML YAML and convert to JSON
const swmlDoc = yaml.load(readFileSync("tts_demo.yaml", "utf8"));

// Validate using JSON Schema draft 2020-12
const ajv = new Ajv2020({ allErrors: true, strict: false });
addFormats(ajv);

const validate = ajv.compile(schema);
const valid = validate(swmlDoc);

if (valid) {
  console.log("VALID — tts_demo.yaml conforms to the SWML schema.");
} else {
  console.log("INVALID — validation errors:\n");
  for (const err of validate.errors) {
    console.log(`  ${err.instancePath || "/"} — ${err.message}`);
    if (err.params) console.log(`    params: ${JSON.stringify(err.params)}`);
  }
}
