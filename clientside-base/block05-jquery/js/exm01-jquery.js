$(document).ready(startEventsWithjQ);
function clickButtonByjQ() {
    alert("Click button via JQuery");
}
function startEventsWithjQ() {
    $("#idButtonJQ1").click(clickButtonByjQ);
    $("#idButtonJQ2").click(clickButtonByjQ);
    $("button.continue").html("[Txt via jQ]Next Step..").click(clickButtonByjQ);
    $("#idButton").html("[Txt via jQ]Next Step...").click(clickButtonByjQ);
}