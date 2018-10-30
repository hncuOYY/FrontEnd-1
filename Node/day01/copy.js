const fs = require('fs');

// 异步读取
fs.readFile('./files/copied.txt', (err, data) => {
    if (err) throw err.message;

    console.log('读取成功');

    // 异步写入
    fs.writeFile('./files/copy.txt', data, err => {
        if (err) throw err.message;

        console.log('写入成功');
    });
});