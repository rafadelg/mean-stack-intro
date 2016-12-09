$(document).ready(initializeEvents);
function initializeEvents() {
    $("#outer").mouseover(function () {
        $("#log").append("<div>Handler for .mouseover() called.</div>");
    });
    $("#other").click(function () {
        $("#outer").mouseover();
    });
}