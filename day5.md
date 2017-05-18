	<!DOCTYPE html>
	<html lang="en">

	<head>
    <meta charset="UTF-8">
    <title>Document</title>
	</head>
		<style>
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .cc-status-wrap{
        display: block;
        width: 100%;
        color: white;
       
    }
    .cc-status-wrap li{
        height: 40px; 
    }
    .cc-status-second{
        height: 40px;
    }
      .cc-status-second li{
       float: left;
       width: 33%;
       height: 40px;
       line-height: 40px;
       background-color: darksalmon;
    }
    #container{
        height: 40px;
        overflow: hidden;
    }
	</style>

	<body>
    <div id="container">
        <ul id="upbody" class="cc-status-wrap">
            <li>
                <ul class="cc-status-second">
                    <li>a1分钟前 俞*登记了1件绘画作品</li>
                    <li>2分钟前 祁**登记了1件卡通形象</li>
                    <li>5分钟前 和**登记了1件商业计划书</li>
                </ul>
            </li>
            <li>
                <ul class="cc-status-second">
                    <li>b6分钟前 贝*登记了1件平面网页设计</li>
                    <li>7分钟前 和**登记了1件剧本</li>
                    <li>10分钟前 岑*登记了1件论文稿</li>
                </ul>
            </li>
        
        </ul>
        <ul id="upbody" class="cc-status-wrap">
            <li>
                <ul class="cc-status-second">
                    <li>a1分钟前 俞*登记了1件绘画作品</li>
                    <li>2分钟前 祁**登记了1件卡通形象</li>
                    <li>5分钟前 和**登记了1件商业计划书</li>
                </ul>
            </li>
            <li>
                <ul class="cc-status-second">
                    <li>b6分钟前 贝*登记了1件平面网页设计</li>
                    <li>7分钟前 和**登记了1件剧本</li>
                    <li>10分钟前 岑*登记了1件论文稿</li>
                </ul>
            </li>
           
        </ul>
    </div>
    <script type="text/javascript">
        window.onload = function () {
            var box = document.getElementById("container");
            var list = document.getElementById("upbody");
            var lastlist = list.cloneNode(true);
            box.appendChild(lastlist);
            function up() {
                if (box.scrollTop >= list.scrollHeight) {
                    box.scrollTop = 0;
                } else {
                    box.scrollTop++;
                }
            }
            setInterval(up, 50);
        }
    </script>
	</body>

	</html>
文字向上循环滚动的一个效果，最开始scrollHeight总是多出了四个像素，产生的原因是因为我给了li一个display:inline-block属性



 scrollTop是垂直滚动条的位置，最外层的container产生了一个滚动条，实际操控的是滚动条的位置才出现了滚动的效果



clientHeight是元素本身的height + CSS padding - 水平滚动条高度


scrollHeight 是元素的总高度，包括overflow:hidden的高度








