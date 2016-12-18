$(document).ready(initializeEvents);
function initializeEvents() {

    $("#idP1 span").mouseenter(function(){
        alert("You entered p1!\n" +
        "- The mouseenter event occurs when the mouse pointer is over (enters) the selected element.\n" +
        "- This event is often used together with the mouseleave event.");
    });

    $("#idP2 span").mouseleave(function(){
        alert("Bye! You now leave p2!\n" + 
        "- The mouseleave event occurs when the mouse pointer leaves the selected element.\n" +
        "- This event is often used together with the mouseenter event.");
    });

    $("#idP3 span").mouseenter(function(){
        $("#idS3").css("background-color", "yellow");
    });
    

    $("#idS3").mouseleave(function(){
        $("#idP3 span").css("background-color", "lightgray");
    });
    
}