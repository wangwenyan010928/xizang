// 当页面加载时显示欢迎信息
window.onload = function() {
    alert("欢迎来到酸雨观测业务页面！");
};

// 点击按钮显示更多内容
function showMore() {
    var moreContent = document.getElementById("moreContent");
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
    } else {
        moreContent.style.display = "none";
    }
}
