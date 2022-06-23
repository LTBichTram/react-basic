// import { useState } from 'react'

// const useInput = (validate) => {
//     const [enteredValue, setEnteredValue] = useState('')
//     const [isTouched, setIsTouched] = useState(false)
//     const valueIsValid = validate(enteredValue)
//     const hasError = !valueIsValid && isTouched
//     const changeValueHandler = e => {
//         setEnteredValue(e.target.value)
//     }
//     const blurInputHandler = () => {
//         setIsTouched(true)
//     }
//     const resetInputHandler = () => {
//         setEnteredValue('')
//         setIsTouched(false)
//     }

//     return {
//         value: enteredValue,
//         isValid: valueIsValid,
//         hasError,
//         changeValueHandler,
//         blurInputHandler,
//         resetInputHandler
//     }
    
// }

// export default useInput





//useReducer
import { useReducer } from 'react'

const useInput = (validate) => {
    const initInput = {
        value: '',
        isTouched: false
    }
    const inputReducer = (state, action) => {
        if(action.type === 'INPUT') {
            return {value: action.value, isTouched: state.isTouched}
        }
        if(action.type === 'BLUR') {
            return {value: state.value, isTouched: true}
        }
        if(action.type === 'RESET') {
            return {...initInput}
        }
    }
    const [inputState, dispatchInput] = useReducer(inputReducer, initInput)
    const changeValueHandler = e => {
        dispatchInput({type: 'INPUT', value: e.target.value})
    }
    const blurInputHandler = () => {
        dispatchInput({type: 'BLUR'})
    }
    const resetInputHandler = () => {
        dispatchInput({type: 'RESET'})
    }
    const valueIsValid = validate(inputState.value)
    const hasError = !valueIsValid && inputState.isTouched

    return ({
        value: inputState.value,
        isValid: valueIsValid,
        hasError: hasError,
        changeValueHandler,
        blurInputHandler,
        resetInputHandler
    })
}

export default useInput