import React from 'react';
import './App.css';

import { HomePage } from './pages/homepage/home.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route exact path='/shop' component={ShopPage} />
     </Switch>
    </div>
  );
}

export default App;
