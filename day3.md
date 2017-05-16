
###1.今天写表格时想让表格单元格等宽 ###
<style>

.auto{table-layout:auto;width:350px;}
.fixed{table-layout:fixed;width:350px;}
</style>
</head>
<body>

fixed: 表格固定算法 table-layout:flxed;
<table border="1" class="fixed">
<tbody>
	<tr>
		<td>表格固定算法布局</td>
		<td>表格固定算法</td>
		<td>表格固定算法</td>
	</tr>
	<tr>
		<td>表格固定算法</td>
		<td>表格固定算法</td>
		<td>表格固定算法</td>
	</tr>
</tbody>
</table>
auto: 表格自动算法 table-layout:auto;
<table border="1" class="auto">
<tbody>
	<tr>
		<td>表格自动算法，宽度将基于单元格的内容自动拉伸</td>
		<td>表格自动算法</td>
		<td>表格自动算法</td>
	</tr>
	<tr>
		<td>表格自动算法</td>
		<td>表格自动算法</td>
		<td>表格自动算法</td>
	</tr>
</tbody>
</table>
###2 还有写 css选择器时看到的ntc-chlid可以使用负数  ###

	li:nth-child(-n+4){background:red}
可以直接让前四个li的背景变为红色
	



