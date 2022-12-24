function megasena (numbers=6){
    const arr = new Set()

    while(arr.size < numbers){
        arr.add( Number((Math.random() * 60 + 1)|0))
    }
    return [...arr].sort((a,b)=> a>b?1:-1)
}

let resultado = `Os números sorteados foram ${megasena(6)}.` 

console.log(resultado)