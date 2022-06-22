import { useState } from 'react'

const useInput = (validate) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)
    const valueIsValid = validate(enteredValue)
    const hasError = !valueIsValid && isTouched
    const changeValueHandler = e => {
        setEnteredValue(e.target.value)
    }
    const blurInputHandler = () => {
        setIsTouched(true)
    }
    const resetInputHandler = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        changeValueHandler,
        blurInputHandler,
        resetInputHandler
    }
    
}

export default useInput