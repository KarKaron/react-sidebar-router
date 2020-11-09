import React, { Component } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import { Route, Switch } from 'react-router-dom';
import Page from '../main/pages/page';
import Page1 from '../main/pages/page1';
import Page2 from '../main/pages/page2';
import Page3 from '../main/pages/page3';
//import Footer from '../footer/footer';

import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main>
          <Switch>
            <Route exact path="/" component={Page} />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
            <Route path="/page3" component={Page3} />
          </Switch>
        </Main>  
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
