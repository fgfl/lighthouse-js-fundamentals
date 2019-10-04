const loopy = 'Loopy';
const lighthouse = 'Lighthouse';

for(let x = 100; x <= 200; x++) {
  if(x % 3 === 0 && x % 4 === 0) {
    console.log(loopy + lighthouse);
  } else if(x % 3 === 0) {
    console.log(loopy);
  } else if(x % 4 === 0) {
    console.log(lighthouse);
  }else {
    console.log(x);
  }
}