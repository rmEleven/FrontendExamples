// 选择具有类名为 "search" 的元素，并将其存储在名为 "search" 的变量中
const search = document.querySelector('.search');

// 选择具有类名为 "input" 的元素，并将其存储在名为 "input" 的变量中
const input = document.querySelector('.input');

// 选择具有类名为 "btn" 的元素，并将其存储在名为 "btn" 的变量中
const btn = document.querySelector('.btn');

// 添加一个点击事件监听器到按钮（btn）上
btn.addEventListener('click', function () {
    // 切换搜索元素（search）的活动状态（active类的添加和移除）
    search.classList.toggle('active');
    // 让输入框（input）获得焦点
    input.focus();
    // 点击按钮时，输入框将获得焦点，并准备接收用户的输入。
    // 用户可以立即在输入框中开始输入，而无需再次单击或使用其他方式激活输入框。
});