// 对象的结构赋值
// 对象的属性没有次序, 变量必须与属性同名, 才能取到正确的值
let {foo, bar} = {foo: "aaa", bar: "bbb"};
console.log(foo, bar); // aaa bbb

let {bar2, foo2} = {foo2: "aaa", bar2: "bbb"};
console.log(foo2, bar2); // aaa bbb

// 变量名和属性名不同
let {foo3: baz} = {foo3: "aaa", bar3: "bbb"};
// foo是匹配的模式, baz才是变量, 真正被赋值的是变量baz
console.log(baz); // aaa

// 实际上说明, 对象的解构赋值是下面形式的简写
let {foo4: foo4, bar4: bar4} = {foo4: "aaa", bar4: "bbb"};
console.log(foo4, bar4); // aaa bbb

// 解构也可以用于嵌套结构的对象
let obj = {
    n: ['Hello', {y: 'World'}]
};

let {n: [x, {y}]} = obj;
console.log(x, y); // Hello World

// 对象的解构也可以指定默认值
// 默认值生效的条件是对象的属性值严格等于undefined
var {z = 3} = {};
console.log(z); // 3

// 如果解构失败, 变量的值等于undefined
let {i} = {bar: "baz"};
console.log(i); // undefined

/*
将一个已经声明的变量用于解构赋值
let j;
// js引擎会将{j}理解成一个代码块, 从而发生语法错误
{j} = {j: 1};
*/
let j;
// 将大括号写在行首, 避免js将其解释为代码块
({j} = {j: 1});
console.log(j); // 1