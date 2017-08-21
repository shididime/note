## 箭头函数 => 简写函数表达式


语法

* 函数没有参数



        var no = () => 1;
        no();//1
        //等价于
        var no = function(){
            return 1;
        }

* 函数具有1个参数


    
        var hello = a => a;
        hello('world');//world
        // 等同于
        var hello = function(a){
        return a;
        }








* 函数具有多个参数



        var add = (num1,num2) => num1 + num2;
        add(3,7);//10
        //等价于
        var add = function(num1,num2){
            return num1 + num2;
        }




* {}


        var add = (a,b) => {
            return a+b;
            }
        var getobj = id =>({name:"didi",age:18});
        var getobj = id => {
            return ({
                name:'didi',
                age:18
            })
        };//用了块语句的箭头函数不会自动返回值，你需要使用return语句将所需值返回
        //返回对象为obj时在外面加个括号，因为{}会被理解为代码块



* 在箭头函数中this指向不变



      var  obj = {
            data:['didi','yang'],
            init: function(){
                document.onclick = ev =>{
                    console.log(this.data);
                }
            }
        }
        obj.init();//['didi','yang']this指向obj
        var obj = {
            data:['didi','yang'],
            init: function(){
                document.onclick = function(){
                    console.log(this.data);
                }
            }
        }
        obj.init();//underfined
        //箭头函数不能用new，会报错








