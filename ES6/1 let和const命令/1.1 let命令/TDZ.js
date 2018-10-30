// 暂时性死区
var tmp = 1;
if (true) {
    // 在代码块中, 使用let声明变量之前, 该变量都是不可用的
    // tmp = 2;
    let tmp;
}

// "暂时性死区"意味者typeof不再是一个100%安全的操作
// typeof x; // ReferenceError
let x;

// 如果一个变量没有被声明, 使用typeof不会报错
console.log(typeof undeclared_variable); // undefined

// i = j, j未声明, 属于"死区"
function bar(i = j, j = 0) {
    return [x, y];
}
// bar(); // 报错

function foo(m = 1, n = m) {
    return [m, n];
}
console.log(foo()); [1, 1]