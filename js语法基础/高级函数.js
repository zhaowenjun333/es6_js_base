
/**
 * 链式编程
 */
arr = [1, 2, 3, 4, 5]
arr.forEach(x => console.log(x * x))
var newarr = arr.map(x => x * x)
console.log(newarr)
lastarr = newarr.filter(x => x > 10).filter(x => x % 2 == 0)
console.log(lastarr)
// console.log(newarr)
