///////////////////////
///////Basic HTML//////
///////////////////////

const container = document.createElement('div')
const calculator = document.createElement('div')
const form = document.createElement('form')
const formDisplayDiv = document.createElement('div')
const formDisplay = document.createElement('input')



// const inputs = Array.from(document.getElementsByTagName('input')) 
// console.log(inputs) //logs an empty array
// console.log(Array.from(document.getElementsByTagName('input'))) // logs an array with a length of 20
document.addEventListener('DOMContentLoaded', function() {
    const inputs = Array.from(document.getElementsByTagName('input'));
    styleInputs(inputs)// logs an array with a length of 20
    inputs.forEach((el) => {
        el.addEventListener('click', inputClickHandler)
    })
    const equalButton = document.querySelector('input[value="="]')
    console.log('Equal Button', equalButton)
  });
  

// const inputVariables = () => {
//     const inputs = Array.from(document.getElementsByTagName('input'));
//     console.log(inputs); // logs an array with a length of 20
// }

const buttonValues = ['AC','DE','.','/','7','8','9','*','4','5','6','-','1','2','3','+','00','0','=']


// document.getElementsByTagName('input')

///////////////////////
////////Setup//////////
///////////////////////

document.body.appendChild(container)
container.appendChild(calculator)
calculator.appendChild(form)
form.append(formDisplayDiv)
formDisplayDiv.appendChild(formDisplay)
formDisplay.setAttribute('type', 'text')
setUpInputs(buttonValues)


///////////////////////
///////Styling/////////
///////////////////////

container.style.width = `100%`
container.style.height = `100vh`
container.style.backgroundColor = '#D2696E'
container.style.display = 'flex'
container.style.alignItems = 'center'
container.style.justifyContent = 'center'

calculator.style.backgroundColor = '#dc2800'
calculator.style.padding = '20px'
calculator.style.borderRadius = '20px'

formDisplayDiv.style.display = 'flex'
formDisplayDiv.style.justifyContent = 'flex-end'
formDisplayDiv.style.margin = '20px 0'

formDisplay.style.textAlign ='right'
formDisplay.style.flex = '1'
formDisplay.style.fontSize = '30px'
formDisplay.style.boxShadow = 'none'



// styleInputs(allInputs)



///////////////////////
////Helper Functions///
///////////////////////

function inputClickHandler(e) {
    const target = e.target
    if(target.type !== 'text') {
        if(target.value === 'AC') {
            formDisplay.value = ''
        } else if(target.value === 'DE') {
            formDisplay.value = formDisplay.value.slice(0,-1)
        } else if(target.value === '=') {
            if(doesDisplayHaveValue()) return 
            formDisplay.value = eval(formDisplay.value)
        } else {
            formDisplay.value += e.target.value
        }
    }
}

function setUpInputs(inputValues) {
    let currIndex = 0
    for(let i = 0; i < 5; i++) {
        const newDiv = document.createElement('div')
        form.appendChild(newDiv)
        for(let j = 0; j < 4; j++) {
            if(currIndex === 19) {
                continue;
            }
            const newInputEl = document.createElement('input')
            newInputEl.setAttribute('type', 'button')
            newInputEl.setAttribute('value',buttonValues[currIndex])
            newDiv.appendChild(newInputEl)
            currIndex++
        }
    }
    return form.allChildrenNodes
}


function gatherInputs() {
    const inputs = Array.from(document.getElementsByTagName('input'));// logs an array with a length of 20
    return inputs
}
function styleInputs(inputs) {
    inputs.forEach((el) => {
        if(el.type !== 'text') {
            el.style.border = 'none'
            el.style.outline = 'none'
            el.style.width = '60px'
            el.style.height = '60px'
            el.style.borderRadius = '10px'
            el.style.background = 'transparent'
            el.style.fontSize = '20px'
            el.style.cursor = 'pointer'
            el.style.margin = '10px'
        }
        if(el.value === '=') {
            el.style.width = '145px'
        }
        el.style.boxShadow = `-8px -8px 15px rgba(255, 255, 255, 0.1),5px 5px 15px rgba(0, 0, 0, 0.2)`
    })
}

function doesDisplayHaveValue() {
    if(formDisplay.value) {
        return false
    }else return true
}