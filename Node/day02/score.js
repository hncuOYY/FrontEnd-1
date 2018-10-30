const fs = require('fs');
const path = require('path');

const abspath = path.join(__dirname, './files/score.txt');

fs.readFile(abspath, 'utf8', (err, data) => {
    if (err) throw err.message;

    console.log("读取成功");
    
    // 将字符串分隔成字符串数组
    const dataStr = data.split(' ');
    
    let str = '';
    dataStr.forEach((item, i) => {
        if (item.length > 0) {
            const result = item.split('=');
            const newScore = result[0] + ': ' + result[1] + '\n';
            str += newScore;  
        }
    });

    console.log(str.trim());

    fs.writeFile(path.join(__dirname, './files/newScore.txt'), str.trim(), err => {
        if (err) throw err.message;

        console.log('写入成功');
    });
});