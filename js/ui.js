$(document).ready(function(){
    $(".navBox .btnMenu").click(function(){
        $(this).parent().addClass("open");
    });
    $(".navBox .btnClose").click(function(){
        $(this).parent().parent().removeClass("open");
    })
})
