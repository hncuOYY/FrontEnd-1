const fs = require('fs');
console.log(fs);

fs.writeFile('./let.js', 'Hello', err => {
    if (err) throw err;
    console.log('写入成功');
});