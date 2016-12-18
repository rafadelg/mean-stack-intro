$(document).ready(startEvents);

function startEvents() {
    $("#title1").click(clickTitleOne);
    $("#title2").click(clickTitleTwo);
}

function clickTitleOne() {
    let myTitle = $("#title1");
    myTitle.css("color", "#ff0000");
    myTitle.css("background-color", "#ffff00");
    myTitle.css("font-family", "Courier");
}
function clickTitleTwo() {
    let myTitle = $("#title2");
    myTitle.css("color", "#ffff00");
    myTitle.css("background-color", "#ff0000");
    myTitle.css("font-family", "Arial");
}