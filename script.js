let screenTop = document.querySelector('.calculator-display > .top');
let screenBottom = document.querySelector('.calculator-display > .bottom');
let buttons = document.querySelectorAll('.calculator-button');
let valueInArray = []
let isLastIndexSymbol;

buttons.forEach(button => {
   button.addEventListener('click', (e) => {
      let btn = button.getAttribute('data-operate')
      if (btn == 'clearAll') {
         clearScreenAndAll()
      } else if (isLastIndexSymbol) {
         if (!btn.match(/^[0-9]*$/)) {
            valueInArray[valueInArray.length - 1] = btn
            screenTop.innerHTML = valueInArray.join('')
            console.log('kodisi isLasindexTrue : ' + valueInArray);
         } else {
            assignNumberAndSymbol(button)
            console.log('kodisi isLasindexTrue dan inputan false : ' + valueInArray);
            showAssignButton()
         }
      } else if (btn == '=') {
         (isScreenEmpty()) ? screenTop.innerHTML = 0 : '' ;
         showResult()
      } else if (btn == '.') {
         assignNumberAndSymbol(button)
         showAssignButton()
      } else {
         assignNumberAndSymbol(button)
         checkLastIndex()
         console.log(valueInArray)
      }
   })
});

document.addEventListener('keydown', function (e) {
   if (e.keyCode == 13) {
      (isScreenEmpty()) ? screenTop.innerHTML = 0 : '' ;
      showResult()
   } else if (e.keyCode == 8) {
      valueInArray.pop()
      screenTop.innerHTML = valueInArray.join('')
      checkLastIndex()
      console.log(valueInArray);
   }
   console.log(e)
   // screen = screen.pop();
})

function clearScreenAndAll(){
   screenTop.innerHTML = ''
   screenBottom.innerHTML = ''
   delete valueInArray
}

function hideAssignButton(){
   isLastIndexSymbol = true
   console.log('hide button')
}

function showAssignButton(){
   isLastIndexSymbol = false
   console.log('show button')
}

function assignNumberAndSymbol(button){
   let value = button.getAttribute('data-operate')
   let oldValue = screenTop.innerHTML.split('')
   if (oldValue[oldValue.length - 2] == 0) {
      
   }
   screenTop.innerHTML = oldValue.join('') + value
   valueInArray = screenTop.innerHTML.split('')
   console.log(valueInArray)  
}

function showResult(){
   let result = eval(screenTop.innerHTML)
   console.log("hasil : " + result) 
   screenBottom.innerHTML = result
}

function checkLastIndex(){
   if (!valueInArray[valueInArray.length - 1].match(/^[0-9]*$/)) {
      hideAssignButton()
   } else {
      showAssignButton()
   }
}

function isScreenEmpty(){
   if (screenTop.innerHTML.length < 0) {
      alert('Please input number before')
   } else {
      
   }
}