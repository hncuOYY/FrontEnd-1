// let不允许在相同作用域内, 重复声明同一个变量
function func() {
    // 报错
    let a = 1;
    var a = 2;
}

// 报错
function f() {
    let x = 1;
    let x = 2;
}

function foo(arg) {
    let arg; // 报错    
}

function test(arg) {
    // arg位于两个不同的代码块中
    {
        let arg; // 不报错
    }
} 
test();
