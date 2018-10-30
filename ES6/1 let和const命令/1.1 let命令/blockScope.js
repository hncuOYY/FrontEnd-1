// 内层变量可能会覆盖外层变量
var tmp = new Date();
function f() {
    console.log(tmp);

    if (false) {
        // 这里会发生变量声明提升
        var tmp = 'Hello World';
    }
}
f(); // undefined

// 用来计数的循环变量泄露为全局变量
var s = 'hello';

for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
}
console.log(i); // 5