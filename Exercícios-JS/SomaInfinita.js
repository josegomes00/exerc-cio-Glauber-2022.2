function soma_infinita(){
    var total = 0

    for(var i = 0; i <arguments.length; i++){
        total = total +arguments[i]
    }

    console.log("Existem " + arguments.length + "argumentos, a soma de todos é " + total)
}


soma_infinita(1,2,3,4,5)