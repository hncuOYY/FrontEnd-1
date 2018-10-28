/*
var定义的变量没有块作用域
var定义的全局变量会自动添加全局window对象的属性
var定义的变量会提前装载
*/
for (let i = 0; i < 10; i++) {
    // i变量的作用域只在循环体中有效
    console.log(i);
}
// 出错
// console.log(i);