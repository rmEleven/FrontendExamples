// 获取进度条元素
const progress = document.getElementById('progress');
// 获取上一步按钮元素
const prev = document.getElementById('prev');
// 获取下一步按钮元素
const next = document.getElementById('next');
// 获取所有圆圈元素
const circles = document.querySelectorAll('.circle');

// 当前活动步骤
let currentActive = 1;

// 下一步按钮点击事件监听器
next.addEventListener('click', () => {
    // 增加当前活动步骤
    currentActive++;

    // 如果当前活动步骤超过圆圈元素的数量，则将当前活动步骤设置为最大值
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    // 更新界面
    update();
});

// 上一步按钮点击事件监听器
prev.addEventListener('click', () => {
    // 减少当前活动步骤
    currentActive--;

    // 如果当前活动步骤小于1，则将当前活动步骤设置为1
    if (currentActive < 1) {
        currentActive = 1;
    }

    // 更新界面
    update();
});

// 更新界面
function update() {
    // 遍历所有圆圈元素
    circles.forEach((circle, idx) => {
        // 如果索引小于当前活动步骤，则添加活动类；否则移除活动类
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    // 获取所有活动圆圈元素
    const actives = document.querySelectorAll('.active');

    // 计算进度条的宽度
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    // 根据当前活动步骤的值，设置上一步和下一步按钮的禁用状态
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
};