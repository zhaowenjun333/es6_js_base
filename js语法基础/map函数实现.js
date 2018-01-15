
varnewarr =  map(fn,[1,2,4,5,6,7])
console.log(varnewarr)

function map( func,arr){
    let newarr =[]
    for (i in arr){
        newarr[i] = fn(arr[i])
    }
    return newarr


}

function fn(x){
    return ++x
}




