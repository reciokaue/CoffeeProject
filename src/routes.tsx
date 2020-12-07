import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import Basket from "./components/Pages/Basket";
import CreateProduct from "./components/Pages/CreateProduct";
import Info from "./components/Pages/Info";
import Menu from "./components/Pages/Menu";
import Product from "./components/Pages/Product";

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Redirect exact from="/" to="/menu" />

        <Route path="/info" component={Info} />
        <Route path="/Basket" component={Basket} />
        <Route path="/menu" component={Menu} />

        {/* <Route path="/ProductList" component={ProductList}/> */}
        <Route path="/product/:id" component={Product} />
        <Route path="/create" component={CreateProduct} />
      </Switch>
    </>
  );
};

export default Routes;
