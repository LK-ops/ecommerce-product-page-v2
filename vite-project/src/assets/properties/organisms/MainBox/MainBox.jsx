import React from 'react'
import Header from '../../molecules/Header/Header'
import Box from '../../molecules/Box/Box'
import HeaderLine from '../../atoms/HeaderLine/HeaderLine'
import  { useState } from "react";


const MainBox = () => {
  const [count, setCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const increaseCart = () => setCartCount((prev) => prev + count);
  return (
<div style={{paddingLeft:'165px',paddingTop:'30px',display:'flex',flexDirection:'column'}}>
  <Header cartCount={cartCount}/> 
  <HeaderLine/>
  <Box count={count} increaseCart = {increaseCart} increase={increase} decrease={decrease}/>
</div>
  )
}

export default MainBox