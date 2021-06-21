import logo from './logo.svg';
import './App.css';
import Header from './header'; 
import './header.css';
import FrontPage from './frontpage';
import './frontpage.css';
import Awards from './awards';
import './awards.css';
import Swipe from './Swipe'; 
import './swipe.css';
import Featured from './Featured';

function App() {
  return (
    <div className="App">


      {/* Header */} <Header/> 

      {/* frontPage */} <FrontPage/>

      {/* Part 2 Awards*/}<Awards/>

      {/* Swipe Cards */} <Swipe/>

      {/*  above footer 2 parts */ } {/* <Featured/> */}

      {/* footer*/}
    </div>
  );
}

export default App;
