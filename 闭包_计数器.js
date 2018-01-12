

let counter =function( ){
    x =0    //自由变量
    function add(){
        return x++
    }
    return add 
}



c = counter()
console.log(c())

console.log(c())

console.log(c())