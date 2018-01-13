var it = makeIterator(['a', 'b']);

for (let i in new Array(3,6,9)){
    console.log(it.next() )
    console.log(it.next() )
    console.log(it.next() )
}

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true};
    }
  };
}