class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
        console.log("point------")
    }

    show(){
        console.log(this,this.x,this.y)

    }
}
//方法同样的，直接覆盖，
// 不同的属性优先 
class Point3D extends Point{
    constructor(x,y,z){
        super(x,y)
        this.z = z
        this.showme = function(){console.log(this)}
    }

    show(){
        super.show();
        console.log(this,this.x,this.y,this.z)
    }

    static pirnt(){
        console.log("whwslgslgllg3D")
        return "hahhah3D"
    }
}





console.log(Point)
p1 = new Point(4,5)
console.log(p1);
p1.show()

console.log("2&&&&&&&&&&&&&&&&&&&&&")
p3 = new Point3D(1,2,4)
p3.show()

console.log("2&&&&&&&&&&&&&&&&&&&&&")
Point3D.pirnt()
