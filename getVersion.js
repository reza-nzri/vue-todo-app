// npm install dotenv --save-dev

import fs from 'fs'
import path from 'path'

// Definiere __dirname für den Dateipfad
const __dirname = path.dirname(new URL(import.meta.url).pathname)

// Pfad zur .env-Datei
const envFilePath = path.join(__dirname, '.env')

// Pfade zur .pvnr-Datei
const versionFilePath = path.join(__dirname, '.pvnr')

// Lese die aktuelle .env-Datei ein
const currentEnvContent = fs.readFileSync(envFilePath, 'utf8')

// Lese die Versionsnummer aus der .pvnr-Datei
const version = fs.readFileSync(versionFilePath, 'utf8').trim()

// Erstelle den neuen Inhalt für die .env-Datei
const regex = /^VUE_APP_VERSION=.*/gm
const newEnvContent = currentEnvContent.replace(regex, `VUE_APP_VERSION=${version}`)

// Schreibe den neuen Inhalt in die .env-Datei
fs.writeFileSync(envFilePath, newEnvContent)

console.log(`Version ${version} written to .env file`)
