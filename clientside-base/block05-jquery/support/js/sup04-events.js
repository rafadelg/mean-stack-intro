$(document).ready(initializeEvents);
let x = y = z = v = w = 1;
function initializeEvents() {

    $("div.over").mouseover(function(){
        $(this).find("span").text("mouse over x " + y);
        $(".over .in #idSpanOver").text(y++);
    });

    $("div.out").mouseout(function(){
        $(this).find("span").text("mouse out x " + x);
        $(".out .in #idSpanOut").text(x++);
    });

    $("div.enter-and-leave")
        .mouseenter(function(){
            $(this).find("span").text("mouse enter x " + z++);
        }) 
        .mouseleave(function(){
            $(this).find("span").text("mouse leave x " + v++);
        });

    $("div.move").mousemove(function(){
        $(".move .in span").text(w++);
    });
}