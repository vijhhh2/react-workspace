import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import { HomePage } from "./pages/homepage/homepage.component";
import ShopsPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopsPage} />
      </Switch>
    </div>
  );
};

export default App;
