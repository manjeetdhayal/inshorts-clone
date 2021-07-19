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
                 <li><a href='/ReadNow'>Read Now </a></li>
                 <li> Carrers </li>
                 <li> Blog </li>
             </ul>
             </div>

        </div>
    )
    
}

export default Header ; 