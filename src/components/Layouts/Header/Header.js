import React from 'react'

import HeaderCartButton from '../../Cart/HeaderCartButton/HeaderCartButton'

import mealImage from '../../../assets/meals.jpg'

import styles from './Header.module.css'

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={mealImage} alt='Table full of dishes' />
      </div>
    </>
  )
}

export default Header
