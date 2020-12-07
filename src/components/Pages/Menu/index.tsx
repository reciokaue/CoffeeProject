/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import api from "../../../services/api";
import { useOrder } from "../../../services/orderContext";

import { Container, Wrapper, Tab } from "./styles";


const Menu: React.FC = () => {
  const [key, setKey] = useState(true);

  const wrapperRef = React.useRef<HTMLInputElement>(null);
  
  useEffect(() =>{
    if(key){
      wrapperRef.current?.scrollBy(-300,0)
    }else{
      wrapperRef.current?.scrollBy(300,0)
    }
  }, [key])
  
  function LeftSide(){
    setKey(true)
    
  }
  function RightSide(){
    setKey(false)
  }
  
  function WrapperScroll(){
    let wrapperWidth = wrapperRef.current?.offsetWidth
    let scrollLength = wrapperRef.current?.scrollLeft

    if(key === false && scrollLength !== undefined && scrollLength === 0){
      setKey(true)

    } 
    if(key === true && scrollLength !== undefined && wrapperWidth !== undefined && scrollLength === wrapperWidth){
      setKey(false)
    }
  }

  return (
    <Container>
      <h1><Link to="/create">Menu</Link></h1>

      <div className="tabs">
        <label>
          <button
            onClick={LeftSide}
            className={key === true? "active" : ""}
            >
            Bebidas
          </button>
          <button
            onClick={RightSide}
            className={key === false?"active" : ""}
            >
            Lanches
          </button>
          <span className={key? "left" : "" + key!? "right" : ""}></span>
        </label>
        <Wrapper ref={wrapperRef} onScroll={WrapperScroll} id="WrapperTab">
          <Tab>
            <Generator types="bebidasquentes" />
            <Generator types="bebidasfrias" />
          </Tab>
          <Tab>
            <Generator types="lanche" />
            <Generator types="salgado" />
          </Tab>
        </Wrapper>
      </div>
    </Container>
  );
};



interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string;
  types: Array<{
    item: string;
  }>;
}
interface Props {
  types: string;
}
const Generator: React.FC<Props> = (props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const { AddItem } = useOrder();
  
  useEffect(() => {
    api.get("products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
        <div>
          <h1>
            {props.types === "lanche" ? "Lanches" : ""}
            {props.types === "salgado" ? "Salgados" : ""}
            {props.types === "bebidasquentes" ? "Bebidas Quentes" : ""}
            {props.types === "bebidasfrias" ? "Bebidas Frias" : ""}
          </h1>
          {products.map((item) => (
            <>
              {item.type === props.types ? (
                <article key={item.id}>
                  <h2>{item.name}</h2>
                  <p>
                    {item.description}
                    <span>R${item.price.toFixed(2)}</span>
                  </p>

                  <div>
                    <Link to={"product/" + item.id}>Acessar</Link>

                    <button onClick={() => AddItem(item.id, item.name, item.price)}>
                      Adicionar
                    </button>
                  </div>
                </article>
              ) : (
                ""
              )}
            </>
          ))}{" "}
        </div>
    </>
  );
};

export default Menu;
