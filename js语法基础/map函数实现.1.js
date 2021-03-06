
// class map(object)
// |  map(func, *iterables) --> map object
// |  
// |  Make an iterator that computes the function using arguments from
// |  each of the iterables.  Stops when the shortest iterable is exhausted.
// |  
// |  Methods defined here:
// |  
// |  __getattribute__(self, name, /)
// |      Return getattr(self, name).
// |  
// |  __iter__(self, /)
// |      Implement iter(self).
// |  
// |  __new__(*args, **kwargs) from builtins.type
// |      Create and return a new object.  See help(type) for accurate signature.
// |  
// |  __next__(self, /)
// |      Implement next(self).
// |  
// |  __reduce__(...)
// |      Return state information for picklingm




//可以修改为匿名函数和   箭头函数(更精简)
var newarr =  map(fn,[1,2,4,5,6,7])
console.log(newarr)




function map( func,arr){
    let newarr =[]
    for (i in arr){
        newarr[i] = func(arr[i])
    }
    return newarr


}

function fn(x){
    return ++x
}




