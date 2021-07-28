import React from 'react'

import Modal from '../../UI/Modal/Modal'

import styles from './Cart.module.css'

const Cart = (props) => {
  const cartItem = (
    <ul className={styles['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: '12.99' }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  )

  return (
    <Modal onHide={props.onHide}>
      {cartItem}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onHide}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
