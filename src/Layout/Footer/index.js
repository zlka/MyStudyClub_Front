import React from 'react'

const Footer = () => {
  const style = {
    position:'absolute',
    bottom:0,
    width:'100%',
    height:'30px',
    textAlign:'center',
    background:'whitesmoke',
  }
  return (
    <div id='footer'>
      Any questions? 
      <a href="#" style={{textDecoration:'none', color: 'grey'}}> contact us</a>
       </div>
  )
}

export default Footer
