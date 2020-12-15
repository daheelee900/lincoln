import React from 'react';
import logo from'../img/logo.jpg'

import '../css/head.css'

class Header extends React.Component{
  

render(){
    
    return(<div className="header">
   
    <div className='nav-bar'>
      <div className="image">
   <img src={logo}></img>

</div>
    </div>
    <div className='nav-bar'>
   <h3>Vehicles</h3>


    </div>
    <div className='nav-bar'>
    <h3>Technology</h3>


    </div>
    <div className='nav-bar'>
   
    <h3>Shopping</h3>

    </div>
    <div className='nav-bar'>
   
    <h3>AboutLINCOLN</h3>

    </div>
   
   
    </div>)
  }
}


export default Header;
