const fs = require('fs');
const path = require('path');

// fs.readFileSync(path[, options])
let data = fs.readFileSync(path.join(__dirname, 'files/score.txt'), 'utf8');
console.log(data);