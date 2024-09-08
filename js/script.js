function showContent(section) {
    // 隐藏所有的内容块
    document.getElementById('home').style.display = 'none';
    document.getElementById('acidRain').style.display = 'none';
    document.getElementById('highAltitude').style.display = 'none';
    document.getElementById('monitoring').style.display = 'none';
    document.getElementById('contactUs').style.display = 'none';

    // 显示被点击的内容块
    document.getElementById(section).style.display = 'block';
}
