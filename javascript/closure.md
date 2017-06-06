**闭包理解**

- 闭包是一个函数

- 闭包可以使用在它外面定义的变量

- 闭包存在定义该变量的作用域中



  		function foo(){
			var a=1;
		}
		foo();
		console.log(a)//报错
定义在函数内部的**局部**变量在函数执行完后就会销毁，外部无法访问到这个局部变量

		function foo(){
			var a=1;
			function b(){
				console.log(a)
			}
			return b
		}
		var c=foo();
		c();//1
在例子里 函数b()形成了一个闭包，内部函数b()在执行时被返回并保存到了c()上，所以foo()执行后，c中还保存中b()的引用

闭包经典案例分析

		for(var i=0;i<5;i++){
			setTimeout(function(){//setTimeout在for循环结束后才执行
				console.log(i)
			},0)
		}//打印5,5,5,5,5在执行循环完后i=5后才去执行打印

setTimeout是异步的，在这里，当for循环结束之后才开始执行队列中的代码，那for结束时 i是5

解决方案

		for(var i=0;i<5;i++){
			(function(num){
				setTimeout(function(){
					console.log(num)
				},0)
			})(i)
		}//0,1,2,3,4

这里用到了立即执行函数，`(function(){...})()` 立即执行函数就是javascript模仿块级作用域的方法，这个例子中i是传给立即执行函数的参数，匿名函数的形参num接到参数i就开始执行setTimeout，而最内部的匿名函数时一个闭包，所以能访问外层作用域的num.