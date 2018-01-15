 

//可以修改为匿名函数和   箭头函数(更精简)
var newarr =  map( x => ++x ,[1,2,4,5,6,7])
console.log(newarr)  //返回的是一个对象，由于js是弱类型的并不知道是什么对象

for (let  i of newarr) {
    console.log(i);
    
}




function* map( func,arr){
    for (i in arr){
         yield func(arr[i])
    }
}

function fn(x){
    return ++x
}




