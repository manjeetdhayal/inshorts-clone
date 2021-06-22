import react from 'react'
import ReadNow from './ReadNow';

 function Header() {

    return (
        <div className="HeaderName">
            <div id="headerRight">
            <img src="https://inshorts.com/dist/images/home_page/logo.png" alt="image not found " />
            </div>
            <div id="headerleft">
             <ul>
                 <li>Read Now </li>
                 <li><a href="/Carrer"> Carrers </a> </li>
                 <li> <a href="/Blog"> Blog </a></li>
             </ul>
             </div>

        </div>
    )
    
}

export default Header ; 