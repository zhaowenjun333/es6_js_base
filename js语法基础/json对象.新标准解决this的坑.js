 class School{
    constructor(name ){
        this.name=name;
        this.getname = ()=>{
            console.log(this.name)
            return ()=>{
                console.log(this.name)
                return "wwww"
            }
        }
    }
}

sc =new School("jialidun")
func = sc.getname()          
console.log(func( ))        


//新标准就是舒服啊，再也不用自己搞定 this问题了