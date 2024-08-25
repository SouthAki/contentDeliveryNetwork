/*
* getTwoNumberOfSymbols() 获取两个数的符号时候一致 
* @param {number,number} num1,num2
* @return {boolean}
*/
function getTwoNumberOfSymbols(num1 , num2) {
    return (num1 ^ num2) >= 0;
}