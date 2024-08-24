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