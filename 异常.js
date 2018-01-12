
try{
    throw 1;
}catch(error){    //这里是变量 并不是
    console.log(error)
}

try{
    throw Error("newerror");
}catch(error){    //这里是变量 并不是 ,弱类型语言 ，所以只需要用一个catch就可以了
    console.log(typeof(error));
    console.log(typeof(error.constructor.name));
}finally{
    console.log("+++++++++++++++++++++++")
}