// 获取具有类名为 'loading-text' 的元素，并将其存储在 loadText 变量中
const loadText = document.querySelector('.loading-text');

// 获取具有类名为 'bg' 的元素，并将其存储在 bg 变量中
const bg = document.querySelector('.bg');

// 创建一个变量 load，并将其初始值设置为 0，用于跟踪加载进度
let load = 0;

// 创建一个间隔函数，每隔 30 毫秒调用一次 blurring 函数
let int = setInterval(blurring, 30);

// 定义名为 blurring 的函数
function blurring() {
    // 每次调用函数时，将变量 load 的值增加 1，以模拟加载进度的增加
    load++;

    if (load > 99) {
        // 如果加载进度超过 99%，则清除间隔函数，停止加载
        clearInterval(int);
    }

    // 将加载进度显示在具有类名为 'loading-text' 的元素中
    loadText.innerText = `${load}%`;

    // 根据加载进度的值，使用 scale 函数将透明度从 1 渐变到 0
    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    // 根据加载进度的值，使用 scale 函数将模糊效果的程度从 30px 渐变到 0px
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// 定义一个名为 scale 的箭头函数，用于将一个范围内的值映射到另一个范围
const scale = (num, in_min, in_max, out_min, out_max) => {
    // 根据输入的值和范围，计算并返回映射后的值
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}