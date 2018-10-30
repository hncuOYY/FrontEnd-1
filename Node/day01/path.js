const fs = require('fs');
const path = require('path');

/*
__dirname: 当前模块的文件夹名称
__filename: 当前模块的文件名称---解析后的绝对路径
*/
const abspath = __dirname + '/files/copy.txt';
// e:\FrontEnd\Node\day01/files/copy.txt
console.log(abspath);

// path.sep: 提供了平台特定的路径片段分隔符
const abspath2 = __dirname +  path.sep + 'files' + path.sep + 'copy.txt';
// e:\FrontEnd\Node\day01\files\copy.txt
console.log(abspath2);

// e:\FrontEnd\Node\day01\files\copy.txt
const abspath3 = path.join(__dirname, './files/copy.txt');
console.log(abspath3);

// 当node运行命令与运行文件不在同一目录时, 相对路径有可能出现错误
fs.readFile(abspath3, (err, data) => {
    if (err) throw err.message;

    console.log('读取成功');
});

