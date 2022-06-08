import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = props => {
  return (
    <div className={classes.backdrop} onClick={props.onCloseCart}></div>
  )
}
const ModalOverlay = props => {
  return (
    <div className={`${classes.modal} ${props.className}`}>{props.children}</div>
  )
}

const Modal = props => {
  const portalElement = document.getElementById('overlays')

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart}/>, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal