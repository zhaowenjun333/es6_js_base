var  a= new String("sgsgsdgsdg")
var b= 2
function add(){
      a = 3
     console.log("inner para:",a)
    var c =8
}

add()

console.log("outer:a",a)
console.log("outer:b",b)
// console.log("outer:b",c)