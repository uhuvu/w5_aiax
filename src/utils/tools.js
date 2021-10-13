
/**
 * ajax请求封装
    * 注意事项
        1. 不要把页面逻辑写到封装函数中，可以使用回调函数实现页面逻辑
 */
function request(url,callback,method='get'){
    // callback: 回调函数
    // 基础路径
    const baseUrl = 'http://120.76.247.5:2003/api'

    url = baseUrl + url;

    const xhr = new XMLHttpRequest();
    xhr.onload = function(){
        // 页面业务逻辑
        // console.log(xhr.responseText);
        const data = JSON.parse(xhr.responseText); // {code,data,msg}

        // 调用回调函数
        if(typeof callback === 'function'){
            callback(data)
        }
    }
    xhr.open(method,url,true);
    xhr.send();
}   


// 用户代码
// request('/goods?category=女士表',function({data}){
//     const lis = data.result.map(item=>{
//         // item:每一条数据
//         return `<li>
//             <img src="http://120.76.247.5:2003${item.img_url}" />
//             <h4>${item.goods_name}</h4>
//             <p>分类：${item.category}</p>
//             <p class="price"><del>${item.price}</del><span>${item.sales_price}</span></p>
//         </li>`
//     })

//     goodslist.innerHTML = lis.join('')
// })
// request('/category',function(data){
//     category.innerHTML = data.data.result.map(item=>{
//         return `<option value="${item.text}">${item.text}</option>`
//     }).join('')
// })