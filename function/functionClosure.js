// Using var

function createFuncs() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

const funcs = createFuncs();
funcs[0]();
funcs[1]();
funcs[2]();

// as Var isn't block scope they all will see i = 3 ,
// so funcs[0], funcs[1] all equal to 3

function closureFunction() {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

const funClosure = closureFunction();
funClosure[0]();
funClosure[1]();
funClosure[2]();
