const calculator = document.getElementsByClassName(‘.calculator’);
const keys = document.getElementsByClassName(‘.keys’);

console.log(calculator);

keys.addEventListener(‘click’, e => {
 if (e.target.matches(‘button’)) {
    const key = e.target
    const action = key.dataset.action
    
    if (!action) {
        console.log('number key!')
      } else if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        console.log('operator key!')
      }

      if (action === 'decimal') {
        console.log('decimal key!')
      }
      
      if (action === 'clear') {
        console.log('clear key!')
      }
      
      if (action === 'calculate') {
        console.log('equal key!')
      }
 }
})