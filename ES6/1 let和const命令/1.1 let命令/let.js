{
    // let声明的变量只在当前代码块有效
    let a = 1;
    var b = 2;
}
// 提示找不到a
// console.log(a);
console.log(b); // 2

for (let i = 0; i < 10; i++) {   
}
// 循环体外访问不到i
// console.log(i);