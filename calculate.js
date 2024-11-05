calculation()

function calculation(){
  let result = document.getElementById('result')
  let btns = document.querySelectorAll('button')
  let resultValue = ''
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.target.innerHTML == '=') {
        resultValue = eval(resultValue)
        result.value = resultValue
      } else if (e.target.innerHTML == 'C') {
        resultValue = ''
        result.value = resultValue
      } else {
        resultValue += btn.innerHTML  
        result.value = resultValue
      }
    })
  })
}