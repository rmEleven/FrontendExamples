// 获取具有类名为 'box' 的所有元素，并将它们存储在名为 boxes 的变量中
const boxes = document.querySelectorAll('.box');

// 当窗口发生滚动时，触发一个滚动事件，执行回调函数
window.addEventListener('scroll', function () {
    // 计算触发动画的阈值位置，这里设置为窗口高度的五分之四处
    const triggerBottom = this.window.innerHeight / 5 * 4;

    // 遍历每个 box 元素
    boxes.forEach(box => {
        // 获取当前 box 元素相对于视口顶部的距离
        const boxTop = box.getBoundingClientRect().top;
        // 如果当前 box 元素的顶部距离小于触发阈值位置
        if (boxTop < triggerBottom) {
            // 添加类名 'show'，触发动画效果
            box.classList.add('show');
        } else {
            // 移除类名 'show'，取消动画效果
            box.classList.remove('show');
        }
    });
});