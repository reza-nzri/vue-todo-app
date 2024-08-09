// npm install dotenv --save-dev

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert import.meta.url to a proper file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the .env file
const envFilePath = path.join(__dirname, '.env');

// Path to the .pvnr file
const versionFilePath = path.join(__dirname, '.pvnr');

// Read the current .env file content
const currentEnvContent = fs.readFileSync(envFilePath, 'utf8');

// Read the version number from the .pvnr file
const version = fs.readFileSync(versionFilePath, 'utf8').trim();

// Create the new content for the .env file
const regex = /^VITE_APP_VERSION=.*/gm;
const newEnvContent = currentEnvContent.replace(regex, `VITE_APP_VERSION=${version}`);

// Write the new content back to the .env file
fs.writeFileSync(envFilePath, newEnvContent);

console.log(`Version ${version} written to .env file`);
