// 获取所有的板块元素
const panels = document.querySelectorAll('.panel');

// 对每个板块元素添加点击事件监听器
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // 移除所有板块元素的激活类
        removeActiveClasses();
        // 给当前点击的板块元素添加激活类
        panel.classList.add('active');
    });
});

// 移除所有板块元素的激活类
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

// panel.classList 是一个 DOM 元素的属性，它返回一个 DOMTokenList 对象，代表元素的类名（class）集合。

// classList 对象提供了一系列方法来操作元素的类名，包括添加、移除、切换类名以及检查类名是否存在等功能。

// 以下是一些常用的 classList 方法：

// add(className): 向元素的类名集合中添加指定的类名。
// remove(className): 从元素的类名集合中移除指定的类名。
// toggle(className): 如果元素的类名集合中存在指定的类名，则移除它；如果不存在，则添加它。
// contains(className): 检查元素的类名集合中是否存在指定的类名。如果存在则返回 true，否则返回 false。
// item(index): 返回元素的类名集合中指定索引位置的类名。
// length: 返回元素的类名集合中类名的数量。
// 通过使用 classList，可以方便地操作和管理元素的类名，实现对样式和行为的动态控制。