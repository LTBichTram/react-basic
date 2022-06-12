import React from 'react'
import Card from './Card'
import useCounter from '../hook/use-counter'

const BackwardCounter = () => {
    const count = useCounter(false)

  return (
    <Card>{count}</Card>
  )
}

export default BackwardCounter