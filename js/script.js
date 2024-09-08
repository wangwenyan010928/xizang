function showContent(section) {
    // 获取所有的内容块
    var sections = document.querySelectorAll(".content div");
    
    // 隐藏所有内容块
    sections.forEach(function(div) {
        div.style.display = 'none';
    });

    // 显示所点击的内容块
    document.getElementById(section).style.display = 'block';
}
