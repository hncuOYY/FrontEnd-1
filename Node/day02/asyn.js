const fs = require('fs');
const path = require('path');

console.log('start');
const abspath = path.join(__dirname, './files/1.txt');
fs.readFile(abspath, 'utf8', (err, data) => {
    if (err) throw err.message;

    console.log(data);
});
console.log(1);

const abspath2 = path.join(__dirname, './files/2.txt');
fs.readFile(abspath2, 'utf8', (err, data) => {
    if (err) throw err.message;

    console.log(data);
});
console.log(2);

const abspath3 = path.join(__dirname, "./files/3.txt");
fs.readFile(abspath3, 'utf8', (err, data) => {
    if (err) throw err.message;

    console.log(data);
});
console.log(3);

console.log('end');