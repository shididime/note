**迭代方法**






- 每个方法接收两个参数：要在每一项上运行的函数（接收3个参数：数组项的值，该项在数组中的位置，数组对象本身）和（可选的）运行该函数的作用域对象——影响this的值。



这五个方法可以用来遍历数组


1.every方法

	var nums=[1,2,3,4,5,4,3,2,1];
 
	var everyResult=nums.every(function(item,index,array){
		return(item>2);//每项都>2返回true
	});//结果返回false
    //every()每项都true,结果才返回true
2 some()



	var someResulet=nums.some(funtiong(item,index,array){
		return (item>2)//结果返回true
	});//只要有一项为true,结果就为true



3 filter()




	var filterResult=nums.filter(function(item,index,array){
		return (item>2)//起一个过滤的作用
	})；//[3,4,5,4,3]返回一个新的新组



4 map()



	var mapResult=nums.filter(function(item,index,array){
		return (item*2)//
	})；//[2,4,6,8,10,8,6,4,2]
map()返回一个新的新组,适合创建包含的项与另一个数组一一对应的数组




5 forEach()

	var ary = [12,23,24,42,1];  
	var res = ary.forEach(function (item,index,input) {  
       input[index] = item*10;  
	})  
	console.log(res);  //undefined
	console.log(ary); //通过数组索引改变了原数组
    //forEach()没有返回值
	