const fs = require('fs');

// fs.writeFile(file, data[, options], callback)
// 异步写入
fs.writeFile('./files/writeFile.txt', 'Node.js中文网', err => {
    if (err) throw err.message;

    console.log("写入成功");
});