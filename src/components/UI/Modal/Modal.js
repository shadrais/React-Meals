import React from 'react'
import ReactDOM from 'react-dom'

import styles from './Modal.module.css'

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHide}></div>
}

const ModalOverLay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onHide={props.onHide} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </>
  )
}

export default Modal
