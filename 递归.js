var sum =function (x){
    if( x ==1){
        return  1
    }else{
       return  x+ sum(x-1)
    }
    x--
}



console.log(sum(10))



