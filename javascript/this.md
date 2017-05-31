**javascript中的this**



在javascript中使用this作为一种指代，它指代一个对象，这个对象是运行的主体。每执行一个函数，就可以获得他的this属性，可以把this看作this 一个具有调用当前函数的对象的值的变量



	var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    showFullName()
    showFullName: function() {
        console.log (this.firstName + " " + this.lastName);
    }
	}​
		person.showFullName(); // Penelope Barrymore
	/*首先在showFUllName函数中用到了this,这个shouFullName方法是在person对象中被定义的，所以这个this就会拥有person对象的值，所以person对象被调用*/

**在全局作用域中使用this**



在全局作用域中，所有的全局变量和函数都被定义在 window 对象上。因此，当我们在全局函数中使用 this 的时候，它会指向全局 window 对象并且拥有它的值（除非在严格模式下）


	var firstName="yang";
  	var lastName="didi";
  	function showFullName(){
  	console.log (this.firstName + " " + this.lastName);//此时的this拥有的是window下的值，而firstName和lastName定义在window下所以结果为yangdidi
  	}
	var person = {
    firstName: "di",
    lastName: "di",
    showFullName:function () {
        // 下面这行中的 this 指代 person 对象，因为 showFullName 这个函数将会被 person 对象调用
        console.log (this.firstName + " " + this.lastName);
    }
	}​
	showFullName (); // yang didi​
	// 所有的全局变量和函数都定义在 window 对象上面，所以：
	window.showFullName (); // yang didi​
	// 在 person 对象中定义的 showFullName() 函数中的 this 仍然指向 person 对象
	person.showFullName (); // didi
**在闭包中使用this**



闭包不能直接通过使用 this 来访问外层函数的 this 变量，因为this 变量只有当前函数本身可以访问，而其内层函数是访问不到的。



	 var user={
 	tournament:"The Masters",
     data:[{
     	name:"T.woods",age:37
     },{
     	name:"P.Mickelson",age:43
     }],
     clickHandle:function(){
     	this.date.forEach(function(data){//z这里的this可以使用是因为this指向的是user,而data是user对象的一个属性
     		cosole.log("What is This referring to? " + this);//在内层函数中this就不再指向user对象，这个内层函数就不再指向外层的this了
     		console.log(data.name + " is playing at " + this.tournament);
     	})
     }
 	}
 	user.clickHandler();//在匿名函数内部的 this 不能获得外层函数 ,所以this被绑定在了全局 window 对象上。
	What is This referring to? [object Window]
	T. Woods is playing at undefined
	What is This referring to? [object Window]
	P. Mickelson is playing at undefined
要想在内层函数中使用this，先还未进入内层函数时将this的值赋给到一个变量上保存



	var user = {
    tournament: "The Masters",
    data: [
        {name: "T. Woods", age: 37},
        {name: "P. Mickelson", age: 43}
    ],

    clickHandler: function(event) {
        // 为了当 this 还指向 user 对象的时候把它的值保存下来，我们把它存到另一个变量中
        // 我们把 this 保存到 theUserObj 变量中去，这样我们就可以在之后使用了
        var theUserObj = this;
        this.data.forEach(function(person) {
            // 我们将 this.tournament 替换成 theUserObj.tournament
            console.log(person.name + " is playing at " + theUserObj.tournament);
        });
    }
	}

	user.clickHandler();
	// T. Woods is playing at The Masters
	// P. Mickelson is playing at The Masters