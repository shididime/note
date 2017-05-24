**用indexOf()去重**	<!DOCTYPE html>	<html lang="en">	<head>    <meta charset="UTF-8">    <title></title>	</head>	<style>	</style>	<body>    <script type="text/javascript" src="../jquery-1.7.1.min.js"></script>    <script>     var arr = document.getElementsByTagName('*');     var newArr = [];//创建一个新的空数组,用来存放去重后的新数组.    function find(arr){                for (var i = 0,len=arr.length; i < len; i++) {            if (newArr.indexOf(arr[i].nodeName) ==-1 ) {//检索的结果没有匹配值,则返回 -1                newArr.push(arr[i].tagName);            }        }        //document.write(newArr);//利用indexOf()方法查询遍历出的数组在新数组中是否出现,如果出现:则继续遍历数组,如未出现:则利用push方法添加到新数组中.    }    find(arr);    var divs=document.getElementsByTagName("div");//动态，只要有新的div添加到页面中，这个元素也被添加到集合中，下一次访问集合时要在更新集合    i,    div;    for(i=0;i<div.length;i++){//每次都要对i<div.length求职，div.length的值每次循环后都会递增        div=document.getElementsByTagName("div");        document.body.appendChild(div)    }     var divs=document.getElementsByTagName("div");    i,    len,    div;    for(i=0,len=div.length;i<len;i++){//将从nodelist中取得值缓存起来        div=document.getElementsByTagName("div");        document.body.appendChild(div)    }       </script>	</body>	</html>**php smarty模板**- 定界符
 
   Smarty模板标签都被加上了定界符，默认为{和}，定界符可以自定义修改



	<?php

	$smarty->left_delimiter = '';

	$smarty->right_delimiter = '';

	?>



- 变量


以$开头的变量：模版变量，从PHP分配的变量、模板内的assign函数分配的变量




{$foo}  简单的变量，
,#var#配置变量 {$smarty.config.foo} 显示变量配置文件内的变量"foo"，等同于{#foo#}



- 几种变量修饰器



{$title|capitalize}  将变量里的所有单词首字大写


{$title|upper}  变量大写

{$smarty.now|date_format:"%Y/%m/%d"}  日期格式

{$articleTitle|count_words}  计算变量内容的单词数，可类推count_paragraphs，count_sentences，count_characters。

{$articleTitle|count_characters:true} 变量内容的字符数，true表示包括空格

{$articleTitle|default:'no title'} 为变量设置默认值

{$articleTitle|indent:1:"\t"}  缩进每一行的字符串，默认是缩进4个空格，这里是缩进一个水平制表符。

{$articleTitle|wordwrap:26:"\n":true} 限制一行字符的长度为26个字符，换行字符为\n，true表示将边界的单词拆开。

{$articleTitle|nl2br} 将变量值中的"\n"回车全部转换成HTML的 <br />

{$articleTitle|replace:' ':'    '} 两个空格换成四个空格



**几种内置函数**




{for}




{for $var=$start to $end} 步长1的简单循环。

{for $var=$start to $end step $step} 指定步长的循环。

{forelse}在循环不能遍历的时候执行。

max 最大的循环次数

	<ul>

	{for $foo=2 to 10 max=3}//只循环3次

    <li>{$foo}</li>

	{forelse}

  	no iteration

	{/for}

	</ul>

	输出：

	<ul>

    <li>2</li>

    <li>3</li>

    <li>4</li>

	</ul>



{if},{elseif},{else} 

	{if $name eq 'Fred'}

    Welcome Sir.

	{elseif $name eq 'Wilma'}

    Welcome Ma'am.

	{else}

    Welcome, whatever you are.

	{/if}



{foreach},{foreachelse}

foreach用于循环数组
参数：$arrayvar 一般是数组的值，决定了{foreach} 循环的次数。你也可以传递一个任意的整数来控制循环次数。没有值的情况下， {foreachelse}将执行。

{foreach $arrayvar as $itemvar}   其中$itemvar为每次循环中的变量

{foreach $arrayvar as $keyvar=>$itemvar} 适用多维数组的情况


	<?php

	$people = array('fname' => 'John', 'lname' => 'Doe', 'email' => 'j***@example.com');

	$smarty->assign('myPeople', $people);

	?>



	<ul>

	{foreach $myPeople as $value}

   	<li>{$value@key}: {$value}</li>

	{/foreach}

	</ul>

	输出：

	<ul>

    <li>fname: John</li>

    <li>lname: Doe</li>

    <li>email: j***@example.com</li>

	</ul>

{foreach}的语法命令： {break}停止循环。
{continue}  跳过当前本次循环并进入下一次循环。
{foreach}的属性： 
@index 当前数组索引，从0开始计算，@iteration 当前循环的次数,从1开始，@first 当循环{foreach}是首次循环，@last最后一次循环




- extends block




	   	 php smarty模板
  		 {%extends file="ipr-cc/page/common/layout.tpl"%}导入公共，extends:来进行模板继承,子模板继承使用{extends}标签， 该标签一定放要在子模板的第一行
   		 {%block name="content"%}{%block%}//存放该页面内容，
		 {%block name="content" append%}{%block%}//子模板和父模板中的{block}内容，可以通过 append 和 prepend来进行合并





