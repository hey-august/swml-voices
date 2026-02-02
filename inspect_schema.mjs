import { readFileSync } from "fs";
const s = JSON.parse(readFileSync("SWMLObject.json", "utf8"));
const defs = s.$defs || {};

// PlayWithURL
const pwu = defs.PlayWithURL;
console.log("PlayWithURL props:", Object.keys(pwu.properties));
console.log("PlayWithURL required:", pwu.required);

// PlayWithURLS
const pwus = defs.PlayWithURLS;
console.log("PlayWithURLS props:", Object.keys(pwus.properties));
console.log("PlayWithURLS required:", pwus.required);

// Execute
const exe = defs.Execute;
console.log("Execute.execute props:", Object.keys(exe.properties.execute.properties));
console.log("Execute.execute required:", exe.properties.execute.required);
