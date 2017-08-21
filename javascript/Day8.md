**module.exports 与 exports**



Nodejs使用模块化工具管理的原理，每个独立的js文件都可以看做是一个模块，每个模块中都隐含着exports和和module.exports两个对象


这是要引入的一个模块文件 test.js

	     exports.a = function(){
 	     console.log('a')
 	     }
 	     exports.a = 1 
在文件中引入刚才的模块



 	var x = require('./test');
 	console.log(x.a)//结果为2
exports是引用 module.exports的值。module.exports 被改变的时候，exports不会被改变，而模块导出的时候，真正导出的执行是module.exports，而不是exports,exports暴露后才是共有。
每个js文件一创建，都有一个var exports = module.exports = {}; ，使exports和module.exports都指向一个空对象。



**set() map()**

	    var s = new Set();//Set本身是一个构造函数，用来生成Set数据结构。

	[2, 3, 5, 4, 5, 2, 2].map(x => s.add(x));

	for (let i of s) {
  		console.log(i);
	}	
	//结果为 2 3 5 4set结构不会添加重复的值
map()



	var m = new Map();
	o = {p: "hello world"};

	m.set(o, "content");//o为m的一个键
	console.log( m.get(o) );  // content
	
	m.get(o) // "content"

	m.has(o) // true
	m.delete(o) // true
	m.has(o) // false
