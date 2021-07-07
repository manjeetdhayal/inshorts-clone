import React from 'react';

import Header from './header'; 
import './assets/header.scss';
import FrontPage from './frontpage';
import './assets/frontpage.css';
import Awards from './awards';
import './assets/awards.css';
import Swipe from './Swipe'; 
import './assets/swipe.scss';
import Featured from './Featured';
import Footer from './footer';

function Home() {
    return (
        <div> 
        {/* Header */} <Header/> 
  
        
        {/* frontPage */} <FrontPage/>
  
        {/* Part 2 Awards*/}<Awards/>
  
        {/* Swipe Cards */} <Swipe/>
        
  
        {/*  above footer 2 parts */ } {/* <Featured/> */}
  
        {/* footer*/}   <Footer/>
          </div>
    )
}

export default Home; 