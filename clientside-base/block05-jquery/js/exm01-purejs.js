addEvent(window,'load',startEvents,false);
function addEvent(elemento,nomevento,funcion,captura){
    if(elemento.attachEvent){
        elemento.attachEvent('on'+nomevento,funcion);
        return true;
    }else{
        if(elemento.addEventListener){
            elemento.addEventListener(nomevento,funcion,captura);
            return true;
        }
        return false;
    }
}
addEvent(window,'load',startEvents,false);
function startEvents(){
    let buttonJS = document.getElementById("idButtonJS");
    addEvent(buttonJS,'click',clickButtonByJS,false);
}
function clickButtonByJS(e){
    alert("Click button via JavaScript");
}