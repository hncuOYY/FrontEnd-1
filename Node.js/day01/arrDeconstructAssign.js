// 解构赋值: 按照一定模式, 从数组和对象中提取值, 对变量进行赋值
// 数组的解构赋值
let [a, b, c] = [1, 2, 3];
// a = 1, b = 2, c = 3
console.log("a = " + a + ", b = " + b + ", c = " + c);

// 若解构不成功, 变量的值就等于undefined
let [foo] = [];
console.log(foo); // undefined

// 对于set结构也可以使用数组的解构赋值
// 只要某种数据结构具有Iterator接口, 都可以采用数组形式的解构赋值
let [x, y, z] = new Set(['a', 'b', 'c']);
console.log("x = " + x + ", y = " + y + ", z = " + z); // x = a, y = b, z = c

// 解构赋值允许指定默认值
let [f = true] = [];
console.log(f); // true
let[i, j = 'n'] = ['m'];
console.log("i = " + i + ", j = " + j); // i = m, j = n

// 若没指定默认值, 解构赋值的默认值为undefined
// 默认值可以引用解构赋值的其它变量, 但该变量必须已经声明
let [m = 1, n = m] = [];
console.log("m = " + m + ", n = " + n); // m = 1, n = 1
