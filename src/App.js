import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

//Components

//Style Import 
import './App.css';
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
      <div>
         <Router>
           <div>
             {/* Routing */}
            <Route exact path='/' component={HomePage}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;