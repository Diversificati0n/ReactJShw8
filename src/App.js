
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import Registration from './pages/Registration/Registration';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/registration" component={Registration} />
          <Route path="/cart" component={Cart} />
          <Route path="/product" component={Product} />
          <Route path="/catalog" component={Catalog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
