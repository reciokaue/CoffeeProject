import React from "react";

import GlobalStyles from "./styles/GlobalStyles";

import OrderContext from "./services/orderContext";
import BottomNavigation from "./components/BottomNavigation";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <OrderContext>
          <GlobalStyles />
          <BottomNavigation/>
        </OrderContext>
      </BrowserRouter>
  );
}

export default App;
