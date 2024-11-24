import React from 'react'

const LeftBox = () => {
  const imageStyle = { width: '88px', height: '88px', flexShrink: 0, borderRadius: '10px', border: '2px solid #FF7E1B', background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.75) 100%)' }
  return (
    <div style={{ width:'50%',display: 'flex', flexDirection: 'row', paddingTop: '90px' }}>
      <div style={{ width: '50%', height: '700px', display: 'flex', flexDirection: 'column' }}>
        <img style={{ width: '445px', height: '445px', flexShrink: 0, borderRadius: '15px', paddingBottom: '32px' }}
          src="sneaker1.svg" alt="" />

        <div style={{ display: 'flex', width: '445px',justifyContent:'space-between' }}>
          <img style={{ width: '88px', height: '88px', flexShrink: 0, borderRadius: '10px', border: '2px solid #FF7E1B', background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.75) 100%)' }}
            src="sneaker1.svg" alt="" />

          <img style={imageStyle} src="2.svg" alt="" />
          <img style={imageStyle} src="3.svg" alt="" />
          <img style={imageStyle} src="4.svg" alt="" />
        </div>
      </div>
      
    </div>
  )

}
export default LeftBox