/*
* getRandomColor(type) 生成随机颜色
* @param {string} : type: hex, 16进制; rgb, rgb颜色
* @return {string} 
* Use: getRandomColor(type) 返回字符串
*/

function getRandomColor(type) {
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