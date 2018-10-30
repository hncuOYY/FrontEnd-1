const fs = require('fs');
const path = require('path');

/*
__dirname: 当前模块的文件夹名称
__filename: 当前模块的文件名称---解析后的绝对路径
*/
const abspath = __dirname + '/files/copy.txt';
// e:\FrontEnd\Node\day01/files/copy.txt
console.log(abspath);

// e:\FrontEnd\Node\day01\files\copy.txt
const abspath2 = path.join(__dirname, './files/copy.txt');
console.log(abspath2);

fs.readFile(abspath2, (err, data) => {
    if (err) throw err.message;

    console.log('读取成功');
});

