// 获取具有类名 '.container' 的元素，并将其存储在变量 container 中
const container = document.querySelector('.container');
// 获取具有类名 '.left' 的元素，并将其存储在变量 left 中
const left = document.querySelector('.left');
// 获取具有类名 '.right' 的元素，并将其存储在变量 right 中
const right = document.querySelector('.right');

// 当鼠标进入左侧元素时，添加类名 'hover-left' 到容器元素的 class 列表中
left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
// 当鼠标离开左侧元素时，从容器元素的 class 列表中移除类名 'hover-left'
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

// 当鼠标进入右侧元素时，添加类名 'hover-right' 到容器元素的 class 列表中
right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
// 当鼠标离开右侧元素时，从容器元素的 class 列表中移除类名 'hover-right'
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));