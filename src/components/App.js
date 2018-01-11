import React from 'react';

import{ BrowserRouter , Route, Switch} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Teacher from "./Teachers";
import Courses from "./Courses";
import NotFound from "./NotFound";
import Featured from './Featured';

const App = () => (
    <BrowserRouter>
        <div className="container">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" render={() => <About title='Hello Thomi' />}/>
            <Route exact path="/teachers" component={Teacher}/>
            <Route path="/teachers/:topic/:name" component={Featured}/>
            <Route path="/courses" component={Courses}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
    </BrowserRouter>
);

export default App;