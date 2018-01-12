//在对象的空间里面引用了 父类
function person(name,age){
    this.name =name
    this.age =age
}

p = new person("zhaoyunyun",23)
console.log(p.age)