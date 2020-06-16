import React from 'react';

import './App.css';
import Menu  from './Menu.js';
import About  from './About.js';
import Contact  from './Contact.js';
import {BrowserRouter ,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div >
     
      <Menu />
      <Switch>
      <Route path="/" exact component={Home} />
      
      <Route path="/about" component={About} />
     
      <Route path="/contact" component={Contact} />
      </Switch>
     
    </div>
      </BrowserRouter>
  );
}
const Home=()=>{
    
    return(
    <div className="ContactStyle">
        <h1>Welcome to Home page</h1>
        </div>
    )
}

export default App;
