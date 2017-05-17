# javascript基础


**1. instanceof 和 typeof 运算符**




typeof 返回字符串 适合判断原始类型和函数对象




instanceof 基于原型链的判断




		  {} instanceof Object    // true 判断类型
	      typeof 100 === ‘number’ // true 判断类型


  **2.void 运算符**



	 // 无论 void 后面是什么 都返回 undefined
	    void 0  // undefined
		void(0) // undefined
	 

**3.delete 运算符**




	// delete success
	var obj = {x : 1};
	obj.x;                      // 1
	delete obj.x;               // delete 移除该对象属性，不会影响原型链上的对象
	obj.x;                      // undefined

	//delete failed
	var obj = {};
	Object.defineProperty(obj, 'x', {
	configurable : false, 
	value : 1
	});
	delete obj.x; // false
	obj.x;
delete删除的是对象的属性，属性不能被删除的时候就会返回false




