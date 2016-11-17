const https = require('https');
const fs = require('fs');

const options = {
  pfx: fs.readFileSync("test/keys/MCSHOLINGTEST_mozilla.pfx")
};

https.createServer(options, (request, response) => {
  response.writeHead(200);
  response.end('hello world\n');
}).listen(8000);
console.log("Servidor escuchando por el puerto 8000");
/* 
API Nodejs: https://nodejs.org/dist/latest-v6.x/docs/api/https.html

TODO: generar un certificado auto-firmado
https://help.ubuntu.com/lts/serverguide/certificates-and-security.html

*/