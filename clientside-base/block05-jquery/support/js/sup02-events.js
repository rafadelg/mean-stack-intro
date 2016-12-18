$(document).ready(initializeEvents);
function initializeEvents() {

    $("#buttonHide").click(function () {
        $("#idP1,#idP2").hide();
        //$("#idP2").hide();
    });

    $("#buttonShow").click(function(){
        $("#idP1,#idP2").show();
        //$("#idP2").show();
    });

    $("#buttonHideAll").click(hideAll);

    $("#buttonShowAll").click(showAll);

    $(".pOneClick").click(function(){
        $(this).hide();
    }); 

    $(".pDoubleClick").dblclick(function(){
        $(this).hide();
    });   
 
}

function hideAll(){
    $("p").hide();
    $("button").hide();
    $(".header2,.header4").hide();
    $("[href]").hide()
    $("#buttonShowAll").show();

}

function showAll(){
    $("p").show();
    $(":button").show();
    //$(".header2,.header4").show();
    $(":header").show();
    $("a[target='_blank']").show();
}
