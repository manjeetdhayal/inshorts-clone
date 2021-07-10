import react from 'react'; 
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 

import ReadNow from './ReadNow';
import Home from './home';

const MainApp= () => (
    <main>
        <BrowserRouter>
        <Switch>
            <Route exact path='/inshorts-clone' component = {Home} />
            <Route exact path='/ReadNow' component = {ReadNow} />
        </Switch>
        </BrowserRouter>
    </main>
)

export default MainApp; 