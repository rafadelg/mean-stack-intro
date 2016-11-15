const net = require("net");
var server = net.createServer(miSocket);

function miSocket(socket){
    socket.end("Buenas chaval!!\n");
}

//server.listen(23); //pto. estándar
server.listen(8124);
console.log("Servidor escuchando por puerto -de pruebas- 8124");

/*

API Nodejs: https://nodejs.org/dist/latest-v6.x/docs/api/net.html

RFC's Telnet protocol:
    https://tools.ietf.org/html/rfc854
    https://tools.ietf.org/html/rfc855

[ Recomendación ]
Cliente telnet para MS Windows: Putty
Descargable en: http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html

*/