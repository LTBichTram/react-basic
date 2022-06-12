import { useState, useEffect } from 'react'

const useCounter = (isFlag = true) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            if(isFlag) {
                setCount(preCount => (preCount + 1))
            } else {
                setCount(preCount => (preCount - 1))
            }
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [isFlag])

    return count
}

export default useCounter