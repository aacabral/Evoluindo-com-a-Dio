function validaArray(arr, num) {
    try {
        if(!arr && !num) throw new ReferenceError("envie os parâmetros");

    if (typeof arr !== 'object') 
       throw new TypeError("array precisa ser do tipo object");

    if (typeof num !== 'number') 
       throw new TypeError("num precisa ser do tipo número");
    
    if (arr.length !== num) throw new RangeError("tamanho inválido");

    return arr;
    } 

    catch (e) {
        if(e instanceof ReferenceError) {
            console.log("este erro é um ReferenceError");
            console.log(e.message)
        } else if(e instanceof TypeError) {
            console.log("este erro é um TypeError");
            console.log(e.message)
        } else if(e instanceof RangeError) {
            console.log("este erro é um RangeError");
            console.log(e.message)
        } else {
            console.log("Tipo de erro não esperado." + e);
        }
    }
}

console.log(validaArray([1, 2, 3, 4, 5], 5));