console.log(foo); // undefined
// 变量声明会提升
var foo = 0;

// 将出现错误
console.log(bar);
// 变量声明不会提升
let bar = 1;

