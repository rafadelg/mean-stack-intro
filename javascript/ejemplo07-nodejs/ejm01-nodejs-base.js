console.log("NODEJS - tratamto de argumtos en la ejecución de un comando");
for (let i=0; i<process.argv.length; i++){
    console.log("Paramtro: " + i + " - " + process.argv[i]);
}



