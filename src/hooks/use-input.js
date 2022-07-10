import { useState } from 'react'

const useInput = validate => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)
    const changeValueHandler = e => {
        setEnteredValue(e.target.value)
    }
    const blurValueHandler = () => {
        setIsTouched(true)
    }
    const valueIsValid = validate(enteredValue)
    const hasError = !valueIsValid && isTouched
    const resetValueHandler = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return ({
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        changeValueHandler,
        blurValueHandler,
        resetValueHandler
    })
}

export default useInput