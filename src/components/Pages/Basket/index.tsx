import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import { useOrder } from '../../../services/orderContext'


const Basket: React.FC = () => {
  const { order } = useOrder()
  const [ subtotal, setSubtotal ] = useState(0)
  const [ reload, setReload ] = useState(false)

  useEffect(() => {
    var value = 0;
    order.map((data: {price: number}) =>value = value + (data.price))
    setSubtotal(value)  
  }, [order, reload])

  function deleteItem(id: {}){
    setReload(!reload)  
    
    var index = order.indexOf(id);
    order.splice(index, 1)
  }

  return (
    <Container>
      <h1>Basket</h1>
      
      {order.map((data: {
        id: number;
        idProduct: number;
        name: String;
        price: number;
      })=> (
          <div id={'orderItem' + data.id} key={data.id}>
            {data.name}
            <div>
              <label>R${data.price.toFixed(2)}</label>
              <button onClick={() => deleteItem(data)}>X</button>
            </div>
          </div>
        ))}
       
        <article>
        <div>
          <span>
            Mesa
            <input type="number"/>
          </span>
          <div>
              total
              <label>R${subtotal.toFixed(2)}</label>
          </div>
        </div>
        <input placeholder="Digite seu nome" type="text"/>
        <button>Finalizar</button>

      </article>
    </Container>
  );
};

export default Basket;
