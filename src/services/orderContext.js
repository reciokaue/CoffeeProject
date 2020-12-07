import React, {createContext, useContext, useState} from 'react';

export const OrderContext = createContext()

export default function OrderProvider({ children }) {
    const [order, setOrder] = useState([
        // {id: 0,name: "zero", preco: 0},
        // {id: 1,name: "zero1", preco: 0},
    ])
    function AddItem(id, name, price){
        let item = {
            id: order.length + 1,
            idProduct: id,
            name: name,
            price: price,
        }
        setOrder([...order, item])
        console.log(item)
    }

    return (
        <OrderContext.Provider
            value={{
                order,
                setOrder,
                AddItem
            }}
        >
            {children}
        </OrderContext.Provider>
    );
}

export function useOrder(){
    const context = useContext(OrderContext)
    const { order, setOrder, AddItem} = context
    return { order, setOrder, AddItem}
}
