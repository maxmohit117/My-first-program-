let containeR = document.querySelector('.container');

let result = document.querySelector('.result');


function myFunc(x) {
  let resUlt;
  
  let first = document.getElementById('input').value;
  let second = document.getElementById('input1').value;

  switch (x) {
    case 'plus':
      resUlt = Number(first) + Number(second);
      f(resUlt);
      break;
    case 'm':
      resUlt = first * second;
      f(resUlt);
      break;
    case 'd':
      resUlt = first / second;
      f(resUlt);
      break;
    case 'mines':
      resUlt = first - second;
      f(resUlt);
      break;
    default:
      result.innerHTML = "Enter some value!";
  };
}



function f(e) {
  // Tab to edit
  var rando = randoM();
  console.log(rando)
  let i = 0;
  let clear;
  clear = setInterval(() => {
    if (i <= rando) {
      i += 1;
      result.style.color = 'red';
      result.value = `${i}%`;
    } else {
      clearInterval(clear);
      result.value = e;
      result.style.color = '';
    }

  }, 50)
}


function randoM() {
 return Math.floor(Math.random()*99)
}
