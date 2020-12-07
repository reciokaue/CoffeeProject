import React, { useState } from "react";
import { Link } from "react-router-dom";
import Routes from "../../routes";

import { Container, InfoIcon, MenuIcon, BasketIcon } from "./styles";

const BottomNavigation: React.FC = () => {
  const [key, setKey] = useState("menu");

  return (
    <Container>
      <section className="pages">
        <Routes />
      </section>


      <section className="bottomContainer">
        <div>
          <span
            className={
              key === "info"? "left": "" + 
              key === "basket"? "right": "" + 
              key === "menu"? "middle": ""
            }
          ></span>
          <Link
            onClick={() => setKey("info")}
            to={"/info"}
            className={key === "info" ? "active" : ""}
          >
            <InfoIcon />
          </Link>
    
          <Link
            onClick={() => setKey("menu")}
            to={"/menu"}
            className={key === "menu" ? "active" : ""}
          >
            <MenuIcon />
          </Link>
        
          <Link
            onClick={() => setKey("basket")}
            to={"/basket"}
            className={key === "basket" ? "active" : ""}
          >
            <BasketIcon />
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default BottomNavigation;
