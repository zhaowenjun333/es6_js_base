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


school.getName()       //this 指的是school

method = school.getName  //分开写了
func = method()          //匿名函数调用 又返回了一个匿名函数

console.log(func.call(school))         //匿名函数调用