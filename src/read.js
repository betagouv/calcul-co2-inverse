// read.js
const fs = require('fs');
const yaml = require('js-yaml');

try {
    let fileContents = fs.readFileSync('src/data.yaml', 'utf8');
    let Data = yaml.safeLoad(fileContents);

    console.log(Data);
  } catch (e) {
}
