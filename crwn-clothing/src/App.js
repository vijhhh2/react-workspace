import React from 'react';
import './App.css';

import { HomePage } from './pages/homepage/home.component';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router-dom';
import SignInAndSingUpPage from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component';

function App() {
  return (
    <div className="App">
      <Header />
     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route exact path='/shop' component={ShopPage}/>
       <Route exact path='/signin' component={SignInAndSingUpPage}/>
     </Switch>
    </div>
  );
}

export default App;
