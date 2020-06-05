function* generatorSmaple(){
    yield "1";
    yield "2";
    yield "3";
}

const sample = generatorSmaple();
// console.log(sample)

// console.log(sample.next());
// console.log(sample.next());

for(let s of sample){
    console.log(s)
}

// function* delay(ms){
//     yield setTimeout(_ => {
//         console.log("setTimeout after "+ ms);
//         // return "delay method";
//     }, ms);
// };

function* fetchUser (n){
    yield* delay(2000);
    yield n + 1;
    yield* delay(2000);
    yield n + 2;
    yield* delay(2000);
    yield n + 3;

};

function* G1(){
    yield "1";
    yield* fetchUser(10);
}

const call_g1 = G1();
// console.log(call_g1.next());
// console.log(call_g1.next());
// console.log(call_g1.next());
// console.log(call_g1.next());
// console.log(call_g1.next());
// console.log(call_g1.next());
// console.log(call_g1.next());


// Generator as a computed property

class Foo {
    *[Symbol.iterator] () {
      yield 1;
      yield 2;
    }
}

const SomeObj = {
    *[Symbol.iterator] () {
      yield 'a';
      yield* delay(5000)
      yield 'b';
    }
};
var iterator =  SomeObj[Symbol.iterator];

// console.log(iterator().next());
// console.log(Array.from(new Foo)); //  [ 1, 2 ]
// console.log(Array.from(SomeObj)); // [ 'a', 'b' ]

function* gardenCity(){
    yield "gardenCity";
    yield "DLF";
};

  function* property(){
      yield 'Home';
      yield* gardenCity();
      yield 'Appartment';
      yield 'Flats';
      
      return 'Done';
  }

  var p1 = property();
//   console.log(p1.next());
//   console.log(p1.next());
//   console.log(p1.next());
//   console.log(p1.next());
//   console.log(p1.next());
//   console.log(p1.next());

//   for(let it of p1){
//     console.log('it', it);
//   }