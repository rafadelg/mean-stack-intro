$(document).ready(initializeEvents);
function initializeEvents() {

    $("tr:gt(0):even").css("background-color", "cyan");  //par (omito cabecera -1er th-)
    $("tr:gt(0):odd").css("background-color", "yellow"); //impar (omito cabecera -1er th-)
    $("body *").css("font-family", "verdana");
 
}