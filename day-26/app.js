const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.keys');
const display = document.querySelector('.display');

keys.addEventListener('click',(e) => {
  if(e.target.matches('button')) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    
    if(!action) {
      if(displayedNum === '0') {
          display.textContent = keyContent;
      } else {
        display.textContent = displayedNum + keyContent;
      }
    } 
    
    if(
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide'
    ) {
      console.log('operador');
    } 
    
    if(action === 'decimal') {

    } 
    
    if(action === 'clear') {
      console.log('clear')
    } 
    
    if(action === 'calculate') {
      console.log('equal')
    }
  }
})