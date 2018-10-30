const fs = require('fs');
const path = require('path');

fs.stat(path.join(__dirname, './files/score.txt'), (err, stats) => {
    if (err) throw err.message;

    // 文件的字节大小
    console.log(stats.size);
    // 判断fs.Stats对象是否表示一个普通文件
    console.log(stats.isFile()); // true
    // 判断fs.Stats对象表示一个文件系统目录
    console.log(stats.isDirectory()); // false
});