// 获取元素
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;

// 点击按钮切换导航显示/隐藏
toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('active');
    body.classList.toggle('sidebar-open');
});