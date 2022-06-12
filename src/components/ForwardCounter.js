import React from 'react'
import Card from './Card'
import useCounter from '../hook/use-counter'

const ForwardCounter = () => {
    const count = useCounter(true)

  return (
    <Card>{count}</Card>
  )
}

export default ForwardCounter