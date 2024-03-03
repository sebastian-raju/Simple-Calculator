
let calculation= '';
let flag = '';

displayIn = (calculation, flag) => {
  if(flag === 'error'){
    document.querySelector('.js-display-output').innerHTML = 'error';
    return;
  }
  document.querySelector('.js-display-input').innerHTML = calculation;
}

displayOut = (calculation) => {
  document.querySelector('.js-display-output').innerHTML = calculation;
}


calculate = (val) => {
  try{
    if(val === '='){
      calculation = eval(calculation);
      if(calculation === undefined){
        calculation = '';
        return;
      }
      displayOut(calculation);
      return;
    }
  }
  catch{
    flag = 'error';
    calculation = '';
    displayIn(calculation, flag);
    return;
  }
  
  if(val === 'del'){
    if(calculation === ''){
      return;
    }
    // calculation = calculation.toString();
    calculation = calculation.toString().slice(0,-1);
    displayIn(calculation);
    return;
  }
  if(val === 'reset'){
    calculation = '';
    displayIn(calculation);
    displayOut(calculation);
    return;
  }

  if(val === ''){
    calculation = '';
    displayIn(calculation);
    return;
  }
  calculation += val;
  displayIn(calculation);
}
