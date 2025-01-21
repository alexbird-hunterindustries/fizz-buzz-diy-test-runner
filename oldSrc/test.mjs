#!/usr/bin/env node

import './diyUnit.mjs';
import fs from 'node:fs';

// From a web search for "mjs __dirname"
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));

// From a web search for "Node 22 recursive find files"
const files = await fs.readdirSync(__dirname, { recursive: true });
const tests = files.filter(fileName => fileName.endsWith('.spec.mjs'));

tests.forEach(test => {
  // From a web search for "mjs dynamic import"
  import('./' + test);
});
