import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'; 
import Home from './Home';
import About from './About';
import Header from './Header';
import Teachers from './Teachers';
import Courses from './Courses';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header /> 
      {/* header is included on all routes so it is left outside the routes */}
      <Route exact path="/" component={Home} />
      <Route path="/about" render={ () => <About title="About" /> } />
      <Route exact path="/teachers" component={Teachers} />
      <Route exact path="/courses" component={Courses} />
    </div>
  </BrowserRouter>
);

export default App;