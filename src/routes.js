import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import NewProduct from "./pages/NewProduct";
import Purchases from "./pages/Purchases";
import PurchaseDetails from "./pages/PurchaseDetails";

import { GlobalStyle } from "./styles/globals";

const AppRoutes = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/products/new" component={NewProduct} />
      <Route path="/products/:id" component={ProductDetails} />

      <Route exact path="/purchases" component={Purchases} />
      <Route exact path="/purchases/:id" component={PurchaseDetails} />

      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
