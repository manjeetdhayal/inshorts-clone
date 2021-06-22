import logo from './logo.svg';
import './App.css';
import Header from './header'; 
import './header.scss';
import FrontPage from './frontpage';
import './frontpage.css';
import Awards from './awards';
import './awards.css';
import Swipe from './Swipe'; 
import './swipe.scss';
import Featured from './Featured';
import Footer from './footer';

function App() {
  return (
    <div className="App">


      {/* Header */} <Header/> 



      {/* frontPage */} <FrontPage/>

      {/* Part 2 Awards*/}<Awards/>

      {/* Swipe Cards */} <Swipe/>
      

      {/*  above footer 2 parts */ } {/* <Featured/> */}

      {/* footer*/}   <Footer/>
    </div>
  );
}


export default App;
