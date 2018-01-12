var a,b,c=3                    //逗号表达式
console.log(c) 

const add =(x,y)=>{return 1,2,3,4,y,x}
res =add(7,8)
console.log(res,typeof(res))

res1=add((20,10),(6,8))                //逗号表达式
console.log(res1,typeof(res1))