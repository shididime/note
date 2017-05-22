# jQuery笔记 #


- noConflict()



	     $(document).ready(function () {
            jQuery.noConflict();//让出$的控制权
            //不能在使用$,$已经失效
            jQuery("#start").click(function () {
                jQuery("div").show();
                var di = jQuery.noConflict(true);//为jquery创建一个别名来代替$，传入 true 来允许彻底将jQuery变量还原
                di("div").animate({//代码中既可使用"别名（di）"也可以使用"jQuery"。
                    left:'+=200px'
                }, 2000);
                jQuery("div").hide();//当.noConflict(true)时，那么"jQuery"也不能使用了，只能使用新的命名空间来引用jQuery函数。
                
            })

        })
        //jQuery.noConflict(extreme)//extreme 	布尔值true。可以将jQuery完全移到一个新的命名空间

        /* 何时使用这个方法
        那就是其他别的js函数库也有对$的使用，这样的话可能导致与jQuery产生冲突，所以使用jQuery.noConflict()方法可以有效的防止此种冲突。
        */




- jQuery.extend(object)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;jQuery.fn.extend();





	    <script type="text/javascript">
        (function($){
               $.extend({
                   speak:function(){
                       alert("how are you!");
                   }
               });
        })(jQuery);
    	</script>
    	<script type="text/javascript">
        $(document).ready(function(){
            $.speak();
        })
    	</script>

	    jQuery.extend({
	    min: function(a, b) { return a < b ? a : b; },
	    max: function(a, b) { return a > b ? a : b; }
	    });
	    jQuery.min(2,3); //  2 
	    jQuery.max(4,5); //  5

	    var settings = { validate: false, limit: 5, name: "foo" }; 
		var options = { validate: true, name: "bar" }; 
		jQuery.extend(settings, options); 
		结果：settings == { validate: true, limit: 5, name: "bar" }// jQuery.extend()为扩展jQuery类本身，为自身添加新的方法。
	    
	    //Objectj Query.extend( target, object1, [objectN])用一个或多个其他对象来扩展一个对象，返回被扩展的对象
	    var list = { name: "didi", age: 5, sex: "girl" }; 
		var list2 = { name: "dididi", age: 20 }; 
		jQuery.extend(list, list2); 
		结果：list == { name: dididi, age: 20, sex: "girl" }//当后面的参数如果和前面的参数存在相同的名称，那么后面的会覆盖前面的参数值。

	    //jQuery.fn.extend(object);
		$.fn.extend({          
         news:function() {            
          $(this).click(function(){                 
                 alert($(this).val());           
           });           
     	   }       
	      });       
	    $("#input1").news(); //jQuery.fn.extend(object)是具体到实例上，调用把方法扩展到了对象的prototype上，所以实例化一个jQuery对象的时候，它就具有了这些方法
	    
- 几种选择器



	    <!DOCTYPE html>
		<html lang="en">
		<head>
   	    <meta charset="UTF-8">
        <title>Document</title>
	    </head>
	    <style>
	    .focused{
         background-color: orange; 
 		 }
		</style>
		<div id="content">
    	<div>div</div>
   		 <p class="myClass">p class="myClass"</p>
    	<span>span</span>
    	<p class="notMyClass">p class="notMyClass"</p>
    	<form>
        <label>Name:</label>
        <input name="name" />
        <fieldset>
            <label>Newsletter:</label>
            <input name="newsletter" />
        </fieldset>
    	</form>
    	<table>
        <tr>
            <td>Header 1</td>
        </tr>
        <tr>
            <td>Value 1</td>
        </tr>
        <tr>
            <td>Value 2</td>
        </tr>
    	</table>
    	<input name="none" />
		</div>
		<body>
    	<script type="text/javascript" src="../jquery-1.7.1.min.js"></script>
    	<script>
        //选择器
        $("form input");//<input name="name" /><input name="newsletter" />
        $("form>input");//<input name="name" />
        $("form~input");//form 同级的input<input name="none" />
        //even 所有索引值为偶数的元素，从0开始计算
        //old 所有索引值为奇数的元素，从0开始计算
        //:gt()匹配所有大于给定索引值的元素
        $("tr:gt(0)")//大于索引值0的所有元素,<tr><td>Value 1</td></tr><tr><td>Value 2</td></tr>
        //:lt(index)匹配所有小于给定索引值的元素
        $("tr:lt(2)");// <tr><td>Header 1</td></tr><tr><td>Value 1</td></tr>
    	//：focus
    	$("#content").delegate("*","focus blur",function(){
    	var elem=$(this);
    	setTimeout(function(){
        elem.toggleClass("focused",elem.is(":focus"));//
   		 },0)
   		 });
    	//所有含有id
    	$("div[id]");//<div id="content"></div>
    	//[attribute$=value]属性以某些值结束的额元素 [attribute^=value]属性以某些值开始的元素
   		 </script>
		</body>

		</html>
- 队列



   		<!DOCTYPE html>
		<html>
		<head>
  		<style>div { margin:3px; width:40px; height:40px;
        position:absolute; left:0px; top:60px; 
        background:green; display:none; }
 		div.newcolor { background:blue; }
  	    p { color:red; } 
        </style>
 	     <script type="text/javascript" src="../jquery-1.7.1.min.js"></script>
		</head>
   		 <body>
		<p>队列长度是：<span></span></p>//对于一系列需要按次序运行的函数可以使用队列的方法
		<div></div>

		<script>
		var div = $("div");

		function runIt() {
  		div.show("slow");
  		div.animate({left:'+=200'},2000);
  		div.slideToggle(1000);
  		div.slideToggle("fast");
  		div.animate({left:'-=200'},1500);
 		div.hide("slow");
  		div.show(1200);
  		div.slideUp("normal", runIt);
		}//共有8个动画，第一个动画函数已被移除并开始执行，执行完成，将开始移除并执行第二个动画函数

		function showIt() {
  		var n = div.queue("fx");//每个元素均可拥有一到多个由 jQuery 添加的函数队列,在大多数应用程序中，只使用一个队列（名为 fx
  		$("span").text( n.length );      
  		setTimeout(showIt, 100);
		}

		runIt();
		showIt();
		</script>

		</body>
		</html>