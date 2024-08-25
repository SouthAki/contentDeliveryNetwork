/*
* isPowerOf() 判断一个数是不是2的整数幂
* @param {number} num
* @return {boolean}
*/
function isPowerOf(num) {
    return (num & (num - 1)) === 0;
}