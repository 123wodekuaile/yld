
$('.less').click(function () {
    var num = parseInt($(this).next('input').val())-1;
    $(this).next('input').val(num);
    if(num<=1) {
        $(this).next('input').val(1);
    }
});
$('.add').click(function () {
    var num = parseInt($(this).prev('input').val())+1;
    $(this).prev('input').val(num);
    if(num>9)
    {
        $(this).prev('input').val(10);
    }
});