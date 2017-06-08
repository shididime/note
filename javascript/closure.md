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


用作块级作用域的匿名函数语法：

	(function(){
		//这里是块级作用域,此处定义的变量会在运行结束后被销毁
	})();
在C/C++中，由花括号封闭的代码块都有自己的作用域，也就是块级作用域（私有作用域）。而在javascript中则没有块级作用域

在javascript中定义一个for循环

	for(var i=0;i<10;i++){
	}
	console.log(i)//10 在for循环的外部能访问i;在块级作用域中这个i在循环结束后就直接被销毁
解决

	function fun(n){
    	(function(){
        	for(var i = 0; i < n; i++){
            	
        	}
    	})();
    	console.log(i); //无法访问 发生错误
	}
fun()内部的匿名函数运行完毕后内部的变量i立即被销毁了，所以在匿名函数外边访问不到i

闭包中的this对象

	var name="The Window";
	var object={
		name:"The Object",
		getName:function(){
			return function(){
				return this.name;//这里的this指向window
			}
		}
	}
	alert(object.getName()());//The Window
	var name="The Window";
	var object={
		name:"The Object",
		getName:function(){
			var that=this;//将当前的this保存在变量上
			return function(){
				return that.name;
			}
		}
	}
	alert(object.getName()());//The Object



内存管理

当闭包的作用域链存在一个HTML元素，那么这个元素就无法被摧毁	要想销毁这个

	function func(){
		var test=document.getElementById('test');
		test.onclick=function(){
			console.log('test.id')
		}
	}
在闭包中调用局部变量，会使得这个局部变量无法被及时的销毁，使得会一直占用内存，如果需要回收这些变量占用的内存可以所动的设置为null;上个例子中，在使用闭包时，变量test是Javascript对象，而id为test的是一个DOM对象，变量test引用了这个DOM对象，test.onclick引用了一个匿名函数，这个匿名函数是一个闭包，这个闭包可以调用test,所以就形成了循环引用



		function func(){
		var test=document.getElementById('test');			
		var tid=test.id
	

		test.onclick=function(){
			console.log('tid')
		}
		test=null;

	}
将test.id保存在tid中，当闭包引用这个tid时就消除了循环引用，现在闭包不直接引用test,但是包含函数的活动对象会保存这个test的引用，所以还要把test设置为null才会解除对这个DOM元素的引用

私有变量

	/*
  	* 函数中定义的变量，为私有变量，不能再函数的外部访问这些变量
  	*/
 	function Person(){
 		var neme;//私有变量
 		var say=function(){
 			console.log('hello');//私有方法
 		}
 		//访问私有变量
 		this.getName=function(){//特权方法  能够访问访问私有变量和私有函数
 			return name;
 		}
 		this.setName=function(newname){
 			name=newname;
 		}
 	}
 	var p1=new Person();
 	p1.setName("di");
 	console.log(p1.getName());//di 

 
静态私有变量

在私有作用域中定义私有变量和函数,创建特权方法访问私有变量
 
 	(function(){//块级作用域
 		var name;//私有变量
 		Person=function(){//全局变量
 			return name;
 		}
 		Person.prototype.getName=function(){//特权方法在原型上定义,所有实例都可以访问
 			return name;
 		}
 		Person.prototype.setName=function(newname){
 			name=newname;
 		}
 	})();
	 var p1=new Person();
 	 var p2=new Person();
	 p1.setName('di');
	 console.log(p1.getName());//di
	 console.log(p2.getName());//di
 
 单例
 单例是只有一个实例的对象,在javascript中用对象字面量的方式创建单例对象

 	var singleObj={
 		name:'John',;
 		method:function(){
 		
 		}
	 }
 
 	var testModule=(function(){
 		var count=1;//count变量只能通过下面两个方法进行调用
 		return {
 			incermentCount:function(){
 				return ++count;
 			},
 			resetCount:function(){
 				return 0;
 			}	
 			//incermentCount和resetCount方法只能通过testModule进行调用
 		}
	 })();
 
 	var Module = (function () {  
    	var my={},  
        	privateVar = 8;//私有属性
    	function privateFun() {//私有方法
        	return ++privateVar;  
    	};  
    	//添加特权
    	my.publicVar = 1;//公共属性
    	my.moduleFun = function () {//公共方法
        	return privateFun();  
    	};  
    	//返回这个对象
    	return my;  //返回了一个my给Module作为外部访问闭包内容的接口
	}());  
	console.log(Module.publicVar);//1  
	console.log(Module.publicFun());//9  


	
	

		
		