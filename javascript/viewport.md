**viewport**




- 什么是viewport?



	viewport 是用户网页的可视区域,移动前端中常说的 viewport （视口）就是浏览器显示页面内容的屏幕区域。引入viewport的目的就是用于解决PC页面能在手机上正常显示，不会因屏幕变小而挤压布局导致页面排版混乱的问题。



	    <meta name="viewport" content="width=device-width, initial-scale=1.0">




	viewport全部属性&值如下：

	width: viewport宽度.一般设置为device-width，**device-width宽度为设备宽度**




	height: viewport高度一般设置为device-height




	initial-scale: 初始缩放比例，页面首次被显示可视区域的缩放级别，取值1.0则页面按实际尺寸显示，无任何缩放

	maximum-scale: 最大缩放比例

	minimum-scale: 最小缩放比例

	user-scalable: 是否允许用户缩放

- **layout viewport(布局视口) 和 visual viewport ideal viewport（理想视口）**



**visual viewport**是页面当前显示在屏幕上的部分,用户可以通过滚动来改变他所看到的页面的部分，或者通过缩放来改变visual viewport的大小。







**document.documentElement.clientWidth和-Height**可以获取layout viewport的尺寸 
![](http://jbcdn2.b0.upaiyun.com/2013/08/viewport1.jpg)


**可以想象手机看到的是visual viewport，底下蓝色的看不到的是layout viewport(布局视口)**




**visual viewport**，它是通过**window.innerWidth/Height**来进行度量的。很明显当用户缩小或者放大的时候，度量的尺寸会发生变化。 







layout viewport在完全缩小模式的情况等于visual viewport.layout viewport的宽度和高度等于在最大限度缩小的模式下屏幕上所能显示的任何内容的尺寸,layout viewport是整个页面布局的大小。



width被用来定义layout viewport的宽度




（以iPhone4S为例，会在其320px的visual viewport上，创建一个宽980px的layout viewport，于是用户可以在visual viewport中拖动或者缩放网页，来获得良好的浏览效果；布局视口用来配合CSS渲染布局，当我们定义一个容器的宽度为100%时，这个容器的实际宽度是980px而不是320px，通过这种方式大部分网页就能以缩放的形式正常显示在手机屏幕上了。）



**ideal viewport**（理想视口），ideal viewport（理想视口）通常是我们说的屏幕分辨率

- **dip DPI**



屏幕尺寸(screen size)，设备的屏幕大小，单位一般为英寸，是屏幕对角线的长度，iphone5s的屏幕为4英寸

像素：把屏幕放大看到的小点点就是像素

分辨率：指屏幕上垂直方向和水平方向上的像素个数，也称为物理像素；iPhone5S的分辨率是1136*640
垂直方向的像素*水平方向的像素

像素密度：即dpi或ppi，屏幕每英寸所占的物理像素点。是dot per inch的缩写，就是每英寸的像素数，也叫做屏幕密度。这个值越大，屏幕就越清晰。


`一个480*800的分辨率的手机，屏幕尺寸为3英寸*5英寸，dpi=480/3=160`



dip/dp:指的是抽象意义上的像素,跟设备的屏幕密度有关系
160dpi的屏幕上，1dip=1px。它跟屏幕密度有关，如果屏幕密度大，1dip代表的px就多，比如在320dpi的屏幕上，1dip=2px



`一个480*800的分辨率的手机，屏幕尺寸为2英寸*3.3英寸，dpi=480/2=240；1dip=(dpi/160)px`




`px = dip*dpi/160`




