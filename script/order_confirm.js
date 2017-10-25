//点击上方切换到地址选择页面
$(function () {
    $(".order_address").click(function () {
        window.location.href = "./address.html";
    });
    $(".order_invoice span:eq(1)").click(function () {
        console.log("hello");
    })
})