import React from 'react'
import LeftBox from '../../atoms/LeftBox/LeftBox'
import RightBox from '../../atoms/RightBox/RightBox'


const Box = ({count, increase, decrease,increaseCart }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <LeftBox />
            <RightBox count={count} increase={increase} decrease={decrease} increaseCart={increaseCart}/>
        </div>
    )
}

export default Box