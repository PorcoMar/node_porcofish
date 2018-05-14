/*
* @Author: Porco_Mar
* @Date:   2018-05-12 16:14:05
* @Last Modified by:   Porco_Mar
* @Last Modified time: 2018-05-12 17:29:04
*/
const mock = () => {
	return new Promise((resolve, reject) => {
		var Mock = require('mockjs')
		var data = Mock.mock({
		    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
		    'list|1-50': [{
		        // 属性 id 是一个自增数，起始值为 1，每次增 1
		        'id|+1': 1,
		        'name': '@cname',
		        'birthday': '@date("yyyy-mm-dd")',
		        'img': '@image',
		        'color': '@color',
		        'age|1-100': 100,   //100以内随机整数
	        // 'province': '@province(true)',
	        // 'city': '@city(true)',
	        // 'area': '@area(true),'
		    }]
		})
		// 输出结果
		// console.log(JSON.stringify(data, null, 4))
		resolve(data)
	})
}
module.exports = {
	mock: mock
}




//以下是拦截ajax获取数据返回数据的方式

// //使用mock生成数据	
//     var data = Mock.mock({
// 	    'list|1-30': [{ // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
// 	        'id|+1': 1, // 属性 id 是一个自增数，起始值为 1，每次增 1
// 	        'age|1-100': 100,   //100以内随机整数
// 	        'birthday':'@date("yyyy年mm月dd日")',
// 	        'name': '@name'
// 	    }]
// 	})
// 	// 输出结果
// 	// console.log(data, null, 4)




// //使用mock 拦截ajax数据
// 	// 配置 Mock 
// 	Mock.mock('http://admin.api-test.yizhenjia.com/servant/query?pageNo=1&&pageSize=10', {
//         "user|5-10": [{
//             'name': '@cname',   //中文名称
//             'age|1-100': 100,   //100以内随机整数
//             'birthday': '@date("yyyy-MM-dd")',  //日期
//             'city': '@city(true)',   //
//             'color': '@color'
//         }]
//     });
// //jquery方式请求
//    $.ajax({
//         url: 'http://admin.api-test.yizhenjia.com/servant/query?pageNo=1&&pageSize=10',
//         dataType: 'json'
//     }).done(function(data, status, xhr) {
//         console.log(JSON.stringify(data, null, 4))
//         console.log(data, null, 4)
//     });
 
// //原生ajax方式
// 	// myajax('http://admin.api-test.yizhenjia.com/servant/query?pageNo=1&&pageSize=10');
//     function myajax(url) {
//             if (window.XMLHttpRequest) {
//                 ajax = new XMLHttpRequest();
//             } else if (window.ActiveXObject) {
//                 try {
//                     ajax = new ActiveXObject("Msxml2.XMLHTTP");
//                 } catch (e) {
//                     try {
//                         ajax = new ActiveXObject("Microsoft.XMLHTTP");
//                     } catch (e) {}
//                 }
//             }
//             if (!ajax) {
//                 window.alert("不能创建XMLHttpRequest对象实例.");
//                 return false;
//             }
//             ajax.open("GET", url, true);
//             ajax.send(null);
//             ajax.onreadystatechange = function() {
//                 if (ajax.readyState == 4 && ajax.status == 200) {
//                     console.log(JSON.parse(ajax.responseText));
//                 }
//             }
//         }

