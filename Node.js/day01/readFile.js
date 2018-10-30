const fs = require('fs');

// fs.readFile(path[, options], callback)
fs.readFile('./let.js', (err, data) => {
    if (err) throw err;
    console.log('读取成功');
});