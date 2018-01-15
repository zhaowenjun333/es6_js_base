
const arr =[12,3]
arr.push(2,3)
console.log(arr)
// arr = [1,2]  //地址 不可以变化,内存不能变化
// arr = 2    


var  x,y,z= arr

console.log(z)



const [x1,y1,z1] =arr   //个数不需要对应

console.log(x1)
console.log(y1)
console.log(z1)

const [x2,,,,,,z2] =arr   //个数不需要对应
console.log(x2)
console.log(z2)

const [x3,...z3] =arr   //个数不需要对应
console.log(x3)
console.log(z3)


const [x4=100,,,,,z4=500] =arr   //给缺省值
console.log(x4)
console.log(z4)




// 对象的解构  ,key的数值 需要一一对应

var {a,b,c,d=400} ={a:100,b:200,c:300}
console.log(a)
console.log(b)
console.log(c)
console.log(d)


//重命名
var {a:M,b,c,d=400} ={a:100,b:200,c:300}
console.log("m",M)
console.log(b)
console.log(c)
console.log(d)
