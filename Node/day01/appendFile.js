// fs.appendFile(path, data[, options], callback);
const fs = require('fs');

// 异步追加
fs.appendFile('./files/appendFile.txt', '\n举头望明月,低头思故乡.', err => {
    if (err) throw err.message;

    console.log('追加成功');
});