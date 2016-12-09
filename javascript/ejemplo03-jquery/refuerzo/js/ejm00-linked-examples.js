$(document).ready(initializeEvents);
function initializeEvents() {

    $("#button").click(function () {
        $("#idP1").hide();
        $("#idP2").hide();
    });

    $("#buttonHide").click(function(){
        $("#idP3").hide();
    });

    $("#buttonShow").click(function(){
        $("#idP3").show();
    });

    $("#buttonHideAll").click(hideAll);

    $("#buttonShowAll").click(showAll);
 
}

function hideAll(){
    $("p").hide();
    $("button").hide();
    $("#buttonShowAll").show();
}

function showAll(){
    $("p").show();
    $("button").show();
}
