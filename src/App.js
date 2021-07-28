import React, { useState } from 'react'
import Header from './components/Layouts/Header/Header'
import Meals from './components/Meals/Meals/Meals'
import Cart from './components/Cart/Cart/Cart'

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <>
      {cartIsShown && <Cart onHide={hideCartHandler} />}
      <Header onShow={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  )
}

export default App
