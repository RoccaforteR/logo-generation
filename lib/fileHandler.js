const fs = require('fs');

function saveToFile(content) {
  fs.writeFileSync('logo.svg', content);
}

module.exports = saveToFile;
