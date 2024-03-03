
let calculation= '';
let flag = '';

displayIn = (calculation, flag) => {
  if(flag === 'error'){
    document.querySelector('.js-display-output').innerHTML = 'error';
    console.log('error')
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
      console.log(calculation);
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
    console.log(calculation);
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
  // console.log(eval(calculation));
  console.log(calculation);
  displayIn(calculation);
}
