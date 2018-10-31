const fs = require('fs');

// fs.readdir(path[, options], callback)
// 异步读取一个目录的内容
fs.readdir(__dirname, (err, files) => {
    if (err) throw err.message;

    console.log(files);
})