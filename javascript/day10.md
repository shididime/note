**javascript 中的call()**



call([thisObj[,arg1[, arg2[, [,.argN]]]]]) 调用一个对象的一个方法，以另一个对象替换当前对象



主要用于扩展函数的作用域



	window.color="red";//
	var o={color:"blue"};
	function sayColor(){
      alert(this.color);
	}

	sayColor();//red,this.color的转换为window.color
	sayColor.call(this);//red	
    sayColor.call(window);//red
    sayColor.call(o);//blue,此时的this指向o
    //obj1.method1.call(obj2,argument1,argument2) 
	如上，call的作用就是把obj1的方法放到obj2上使用，后面的argument1..这些做为参数传入．


	function Class1() 
	{ 
    this.name = "class1"; 

    this.showNam = function() 
    { 
        alert(this.name); 
    } 
	} 

	function Class2() 
	{ 
    this.name = "class2"; 
	} 

	var c1 = new Class1(); 
	var c2 = new Class2(); 

	c1.showNam.call(c2); //将c1的方法用在c2上使用，在c2中没有showNam方法，所以c1的showName方法用在了c2上执行，结果为class2


所以可以用call()方法来实现**继承**，让a执行b的方法



	function Class1() 
	{ 
    this.showTxt = function(txt) 
    { 
        alert(txt); 
    } 
	} 

	function Class2() 
	{ 
	    Class1.call(this); //将class1的对象代替this对象，class2有了class1的所有属性和方法
	} 

	var c2 = new Class2(); 

	c2.showTxt("cc"); //alert(cc)
	
