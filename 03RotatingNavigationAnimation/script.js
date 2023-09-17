// 获取 id 为 "open" 的元素并将其赋值给 openbtn 变量
const openbtn = document.getElementById('open');
// 获取 id 为 "close" 的元素并将其赋值给 closebtn 变量
const closebtn = document.getElementById('close');
// 获取 class 为 "container" 的第一个元素并将其赋值给 container 变量
const container = document.querySelector('.container');

// 为 openbtn 元素添加 "click" 事件监听器，当点击事件发生时执行回调函数
openbtn.addEventListener('click', function () {
    // 给 container 元素添加 "show-nav" 类
    container.classList.add('show-nav');
});

// 为 closebtn 元素添加 "click" 事件监听器，当点击事件发生时执行回调函数
closebtn.addEventListener('click', function () {
    // 从 container 元素中移除 "show-nav" 类
    container.classList.remove('show-nav');
});