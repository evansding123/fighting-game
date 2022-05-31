console.log('hello');
// let x = [1,2,15,-7, 300];
// let y = x.sort();
// console.log(y)

function deletestuff(items) {
  for(let i = 0; i < items.length; i++) {
    if(items[i].length == 0) {
      items.splice(i, 1);
      }
  }
}

let names = ['Rachel', '', 'Meghan', '', '', 'Time'];

//console.log(deletestuff(names));

const f = n => n <= 1 ? 1 : n * f(n-1);
let g = f(4);

function func(a,b) {
  a +=1;
  b.push(1);
}

const a = 0;
const b = [];

func(a,b);

console.log(a,b)