function showContent(section) {
    // 隐藏所有的内容块
    var sections = document.querySelectorAll(".content div");
    sections.forEach(function(div) {
        div.style.display = 'none';
    });

    // 显示所点击的内容块
    document.getElementById(section).style.display = 'block';

    // 首页时，隐藏侧边栏
    var sidebar = document.getElementById('sidebar');
    if (section === 'home') {
        sidebar.style.display = 'none'; // 首页不显示侧边栏
    } else if (section === 'acidRain') {
        // 显示酸雨专题的侧边栏
        sidebar.style.display = 'block';
        sidebar.innerHTML = `
            <ul>
                <li><a href="#">业务规范</a></li>
                <li><a href="#">规章制度</a></li>
                <li><a href="#">业务工作</a></li>
                <li><a href="#">计量检定</a></li>
                <li><a href="#">质量体系内审检查</a></li>
            </ul>
        `;
    } else {
        // 显示其他内容时隐藏侧边栏
        sidebar.style.display = 'none';
    }
}
