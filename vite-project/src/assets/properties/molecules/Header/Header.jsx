import React from 'react'
import LeftHeader from '../../atoms/LeftHeader/LeftHeader'
import RightHeader from '../../atoms/RightHeader/RightHeader'

const Header = ({cartCount}) => {
  return (
    <div style={{display:'flex',alignItems:'center'}}>
        
        <LeftHeader/>
        <RightHeader cartCount={cartCount}/>
        
    </div>

  )
}

export default Header