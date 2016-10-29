$(document).ready(initializeEvents);

function initializeEvents(){
    $("#boton1").click(deleteAll);
    $("#boton2").click(restoreAll);
    $("#boton3").click(addLastElement);
    $("#boton4").click(addFirstElement);
    $("#boton5").click(deleteLastElement);
    $("#boton6").click(deleteFirstElement);
    $("#boton7").click(deleteFirstAndSecondElement);
    $("#boton8").click(deletePreAndLastElement);
}

function deleteAll(){
    $("ul").empty();
}

function restoreAll(){
    //todo lo q hay dentro del ul: 1º lo borro / 2º pongo lo q haya dentrodel Html
    $("ul").html("<li>Primer item</li><li>Segundo item</li><li>Tercer item</li><li>Cuarto item</li><li>Quinto item</li>");
}

function addLastElement(){
    $("ul").append("<li>Agrego un ítem al final</li>");
    
}

function addFirstElement(){
    $("ul").prepend("<li>Agrego un ítem al ppio.</li>");
}

function deleteFirstElement(){
    $("li").eq(0).remove();
}

function deleteFirstAndSecondElement(){
    //lt less than
    $("li:lt(2)").remove();
}

function deletePreAndLastElement(){
    //gt, grather than    
    let posicion = $("li").lenght - 3;
    let liToDel = $("li:gt(" + posicion + ")");
    liToDelete.remove();
}

function deleteLastElement(){
    //$("li:eq(lastPosition)").remove();
    //let liToDelete = $("li").eq(lastPosition);
    //liToDelete.remove();
    let lastPosition = $("li").lenght - 1;
    $("li").eq(lastPosition).remove();
}