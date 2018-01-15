//闭包的意义：为用户节约时间和精力 直接调用即可得


//三层上下文  最外 中间 最里   ，中间的自由变量被内部的引用了
let counter =function( ){
    x =0    //自由变量
    return function (){
        return x++
    }
}

c = counter()
console.log(c())
console.log(c())
console.log(c())
//=================================
function foo(x) {
    var tmp = 3;
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var bar = foo(2); // bar 现在是一个闭包
bar(10);
bar(10);