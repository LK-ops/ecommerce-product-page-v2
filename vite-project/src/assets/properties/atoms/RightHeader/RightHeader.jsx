import React, { useState } from 'react'

const RightHeader = ({cartCount}) => {
  
 
  
  return (
    <div style={{position:'relative',paddingLeft:'200px',paddingRight:'100px',width:'300px',gap:'45px',height:'50px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
            <   div style={{cursor:'pointer',position:'relative'}}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.86313 3.64139H20.9246C21.5077 3.64139 21.9352 4.19014 21.7941 4.75489L19.9732 12.0381C19.8781 12.4181 19.5473 12.6924 19.1563 12.7153L4.83452 13.557C5.09057 14.1554 5.68378 14.5661 6.36452 14.5661H16.3727C17.8709 14.5661 19.0897 15.7849 19.0897 17.2831C19.0897 18.7812 17.8709 20 16.3727 20C14.4955 20 13.1758 18.1275 13.818 16.3584H8.91319C9.55625 18.1298 8.23365 20 6.35846 20C4.09916 20 2.83011 17.3851 4.21903 15.6114C3.44867 15.0012 3.00149 14.1031 2.92835 13.2755C1.79349 0.631508 1.84298 1.18296 1.9492 2.36648L1.94921 2.36663L1.94928 2.36744C2.02069 3.1631 2.11759 4.24273 1.89764 1.79232H0.896159C0.401223 1.79232 0 1.39109 0 0.896159C0 0.401223 0.401223 0 0.896159 0H2.71694C3.18081 0 3.56803 0.354025 3.60951 0.816059L3.86313 3.64139ZM5.43388 17.2831C5.43388 17.7929 5.84867 18.2077 6.35846 18.2077C6.86829 18.2077 7.28308 17.7929 7.28308 17.2831C7.28308 16.7732 6.86829 16.3584 6.35846 16.3584C5.84867 16.3584 5.43388 16.7732 5.43388 17.2831ZM16.3727 18.2077C15.8629 18.2077 15.4481 17.7929 15.4481 17.2831C15.4481 16.7732 15.8629 16.3584 16.3727 16.3584C16.8825 16.3584 17.2973 16.7732 17.2973 17.2831C17.2973 17.7929 16.8825 18.2077 16.3727 18.2077ZM4.59328 11.7758L18.394 10.9648L19.7769 5.43367H4.02401L4.59328 11.7758Z" fill="#1D2026"/>
            </svg>
           {cartCount > 0 &&(
             <div style={{textJustify:'inter-character',position:'absolute',top:'-5px',left:'10px',width: '19px', height: '13px' ,borderRadius: '6.5px', background: '#FF7E1B'}}>
             <span style={{ display:'flex',justifyContent:'center',color: "#FFF", fontFamily: "Kumbh Sans", fontSize: "10px", fontWeight: 700 }}
             >{cartCount}</span>
           </div>
           )}
            
            </div>

            <div><img src="Oval.svg" alt="" /></div>
        </div>
  )
}

export default RightHeader