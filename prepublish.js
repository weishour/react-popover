const fs = require('fs')

const paths = [
  "dist/index.js",
  "dist/index.css"
]

for (const path of paths) {
  if (! fs.existsSync(path)) {
    process.stderr.write(`ERROR: missing required file "${path}"\n\n`)
    process.exit(1)
  }
}