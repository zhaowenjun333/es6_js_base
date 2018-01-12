var school={
    name:"edu",
    getName:function(){
        console.log(this.name)
        return function(){
             console.log(this.name)
             return "wwww"
        }
    }

}


 
func = school.getName ()          //匿名函数调用 又返回了一个匿名函数

console.log(func.bind(school)())         //返回一个函数 需要自己调用