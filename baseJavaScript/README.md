# baseJavaScript Repo

> 你好这是一个公用的JavaScript的函数仓库,通过链接调用某个文件后,直接获得对应的功能,无需自己编写.
>
> 这些代码均通过本组织的测试,暂无bug,但是希望各位能找出对应的bug,一起让社区变得更好

## 1. getRandomColor(获取随机颜色)

```javascript
/*
* getRandomColor(type) 生成随机颜色
* @param {string} : type: hex, 16进制; rgb, rgb颜色; rgba, rgba颜色; hsl, hsl颜色; hsla, hsla颜色  (非必须,默认传入的是生成hex颜色)
* @return {string} 
*/

function getRandomColor(type) {
    if (type === '' || type === undefined) {
        return "#" + Math.random().toString(16).substring(2, 8).padEnd(6, '0');
    }
    switch (type) {
        case 'hex':
            return "#" + Math.random().toString(16).substring(2, 8).padEnd(6, '0');
        case 'rgb':
            return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        case 'rgba':
            return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.random().toFixed(1)})`;
        case 'hsl':
            return `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 101)}%, ${Math.floor(Math.random() * 101)}%)`;
        case 'hsla':
            return `hsla(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 101)}%, ${Math.floor(Math.random() * 101)}%, ${Math.random().toFixed(1)})`;
        default:
            return "#" + Math.random().toString(16).substring(2, 8).padEnd(6, '0');
    }
}
```

调用方法:

```javascript
getRandomColor();
```

## 2. getRandomNumber(生成随机数字)

```javascript
/*
* getRandomNumber() 生成随机数字
* @return {number} 
*/
const crypto = require('crypto');
function getRandomNumber() {
    var num = (Math.random().toString().substring(2,10) + Math.random().toString().substring(2)).toString().substring(2, 10);
    var date = new Date();
    date = date.getTime();
    num = (num * date).toString().substring(0, 8);
    let random = crypto.getRandomValues(new Uint32Array(1))[0];
    num = (num * random).toString().substring(0, 8);
    return num;
}
```

调用方法:

```
// 利用时间戳和两种随机的方法,生成几乎不可预测的伪随机数
getRandomNumber();
```

## 3.getTwoNumberOfSymbols(获取两个数字的符号是否一致)

```javascript
/*
* getTwoNumberOfSymbols() 获取两个数的符号时候一致 
* @param {number,number} num1,num2
* @return {boolean}
*/
function getTwoNumberOfSymbols(num1 , num2) {
    return (num1 ^ num2) >= 0;
}
```

调用方法:

```javascript
getTwoNumberOfSymbols(num1, num2);
```

## 4.isPowerOf(判断一个数是不是2的整数幂)

```javascript
/*
* isPowerOf() 判断一个数是不是2的整数幂
* @param {number} num
* @return {boolean}
*/
function isPowerOf(num) {
    return (num & (num - 1)) === 0;
}
```

调用方法:

```javascript
isPowerOf(num);
```

