**RegExp**



**RegExpd对象创建**



- 构造函数



		var pattern= new RegExp("[bc]at","i") 




- 字面量




		var pattren=/[bc]at/i




var expression=/pattern/flags;



pattern为正则表达式的文本




flags为标志



- g : 全局模式



 
- i : 不区分大小写






1. m : 多行; 将开始和结束字符（^和$）视为在多行上工作（例如，分别匹配每一行的开始和结束（由 \n 或 \r 分割），而不只是只匹配整个输入字符串的最开始和最末尾。




	    var re = null,
            i;
	    for(i=0;i<10;i++){
			re = /cat/g;
            re.test("catastrophe");
		//字面量创建，循环只创建了一个RegExp实例,先匹配到cat,在第二次调用从index为3的地方开始匹配，匹配到最后下一次的test就会从index0开始匹配
	    }
		for(i=0;i<10;i++){
			re=new RegExp("cat","g");
		//每次迭代会创建一个新的RegExp实例，所以每次调用test()都返回TRUE
			re.test("catastrophe")
		}








**RegExp对象方法**



- test()



	test 方法用于测试正则规则在指定的字符串中是否具有符合的匹配结果，如果匹配到则返回true，否则返回false



		var test = "000-00-0000";
		var pattern=/\d{3}-\d{2}-\d{4}/;
		if(pattern.test(test)){
   			alert("The pattern was matched");
		}
		var str='The best things in life are free, like hugs, smiles, friends, kisses, family, love and good memories.';
		var re=/i/;
		alert(re.test(str));  //返回：true
		var reg=/z/;
		alert(reg.test(str));  //返回：false
		




- exec()



	exec() 方法用于检索字符串中的正则表达式的匹配，提取指定字符串中符合要求的子串，该方法返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回 null


　　语法：RegExpObject.exec(str)




		var str = 'good good study day day up';
		var re = /good/;
		var arr = re.exec(str);
		console.log(arr);　　
		//返回一个数组["good", index: 0, input: "good good study day day up"]
		console.log(arr.index);　　//0 因为索引第一个匹配,index表示匹配像在字符串中的位置
		console.log(arr.input);　//good good study day day up。input表示应用正则表达式的字符串
		var str = 'good good study day day up';
		var re = /g(o+)d/;//子表达式是大表达式的一部分
		var arr = re.exec(str);
		console.log(arr);  // ["good", "oo", index: 0, input: "good good study day day up"]
		console.log(arr.length); //2
		var reg = /(o+)/;
		
		var arr = reg.exec(str);
		console.log(arr);  // ["oo", "oo", index: 1, input: "good good study day day up"]
		console.log(arr.length); //2



lastIndex（针对于带参数g的正则表达式）



lastIndex属性，返回匹配内容的最后一个索引位置，也就是下一个匹配的开始位置，注意字符串索引从0开始 



lastIndex表示匹配成功时候，匹配内容最后一个字符所在原字符串中的位置 + 1，也就是匹配内容的下一个字符的index（如果匹配内容在字符串的结尾，同样返回原字符串中的位置 + 1，也就是字符串的length）。如果未带参数g，lastIndex始终为0。

	var reg = /ab/g;
	reg.test('123abc');
	console.log(reg.lastIndex) // 5
	// 匹配内容在最后
	var reg = /ab/g;
	reg.test('123ab');
	console.log(reg.lastIndex) // 5
	// 不带参数g
	var re = /ab/;
	reg.test2('123abc');
	console.log(re.lastIndex) // 0
	var reg = /ab/g;
	// 初始值为0，从最开始匹配 匹配成功， lastIndex为4
	console.log(reg.test('12ab34ab'), reg.lastIndex); // true 4
	// 从第4位字符"3"开始匹配 匹配内容为第二个ab lastIndex 为 8
	console.log(reg.test('12ab34ab'), reg.lastIndex); // true 8
	// 从第8位 (字符长度为8，没有第8位) 开始匹配 匹配不成功 重置lastIndex 为 0
	console.log(reg.test('12ab34ab'), reg.lastIndex); // false 0
	// 从头匹配 同第一步
	console.log(reg.test('12ab34ab'), reg.lastIndex); // true 4






