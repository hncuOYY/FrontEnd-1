var a = [];
// var声明的变量是一个全局变量
for (var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}
// 所有数组a的成员里面的i, 指向的都是同一个i
a[6](); // 10

let b = [];
// j只在本轮循环有效, 每次循环的j都是一个新的变量
for (let j = 0; j < 10; j++) {
    b[j] = function() {
        // js引擎会记住上一轮循环的值
        console.log(j);
    }
}
b[6](); // 6

// for循环中, 设置循环变量的那部分是一个父作用域, 而循环体内部是一个单独的子作用域
for (let x = 0; x < 3; x++) {
    let x = 'abc';
    console.log(x); // abc abc abc
}