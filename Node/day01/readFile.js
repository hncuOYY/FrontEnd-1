const fs = require('fs');
// fs.readFile(path[, options], callback)
// 异步读取
fs.readFile('./files/readFile.txt', (err, data) => {
    if (err) throw err.message;

    console.log('读取成功');
    // 如果未指定字符编码, 则返回原始的buffer
    console.log(data); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
    console.log(data + ''); // Hello World!
    // 读取文件没有出错, 则err默认为null
    console.log(err); // null
   
});
fs.readFile('./files/readFile.txt', 'utf8', (err, data) => {
    if (err) throw err.message;
    console.log(data); // Hello World!
});
