function show(x) {
    console.log(typeof x);    // undefined
    console.log(typeof 10);   // number
    console.log(typeof 'abc'); // string
    console.log(typeof true);  // boolean        Nan

    console.log(typeof function () {});  //function
    console.log(typeof [1, 'a', true]);  //object
    console.log(typeof { a: 10, b: 20 });  //object
    console.log(typeof null);  //object
    console.log(typeof new Number(10));  //object
}
show();


//其中上面的四种（undefined, number, string, boolean）属于简单的值类型，
// 剩下的几种情况——函数、数组、对象、null、new Number(10)都是对象。他们都是引用类型