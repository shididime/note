



#  Object.defineProperty()方法 

Object.defineProperty(obj, prop, descriptor)接受三个参数，而且都是必填的




**descriptor**

1.descriptor参数可以为下列这些值

2.value:属性的值

3.writable:如果为false，属性的值就不能被重写,只能为只读了

4.configurable:总开关，一旦为false，就不能再设置他的（value，writable，configurable）

5.enumerable:是否能在for...in循环中遍历出来或在Object.keys中列举出来。

6.get

7.set
Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。

Obeject.defineProperty()可以监听属性变动，通过这个方法，可以自定义getter和setter函数，vue就是通过设置数据的get和set函数来实现数据的双向绑定，给对象的某个值赋值，就会触发setter，那么就能监听到了数据变化



	var a= {}
    Object.defineProperty(a,"b",{//Object.defineProperty()有三个参数，obj要在其上定义属性的对象。prop要定义或修改的属性的名称。descriptor将被定义或修改的属性的描述符。
      value:123
    })
    console.log(a.b);//123
	var a= {}
	//等价于
	Object.defineProperty(a,"b",{
  	value:123,
  	writable:false,
  	enumerable:false,
  	configurable:false
	})
	console.log(a.b);//123



	var obj={};
	Obeject.defineProperty(obj,'hello',{
	get : function(){
	console.log('你取我的值')
	}
	set : function(){
	console.log('重新设置newvalue')
	}
	})
	obj.hello;//get被调用
	obj.hello = 'abc' ; //set方法被调用，为hello属性赋予了新的值
	    	  
