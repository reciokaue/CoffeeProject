import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api";

import { Container } from "./styles";
import { useOrder } from "../../../services/orderContext";

interface Product {
  name: string;
  type: string;
  price: number;
  description: string;
  images: Array<{
    url: string;
    id: number;
  }>;
}
interface Params {
  id: string | undefined;
}

const Product: React.FC = () => {
  const { id } = useParams<Params>();
  const [product, setProduct] = useState<Product>();
  const { AddItem } = useOrder();

  useEffect(() => {
    api.get("products/" + id).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  return (
    <Container>
      <h1>{product?.name}</h1>
      
      <div className="slider">
        {product?.images.map((image: {url: string}) =>(
          <img className="photo" alt={image.url} src={image.url}/>
        ))}
      </div>
      <div>
        <h2>{product?.name}</h2>
        <p>
          {product?.description}
          <label>R${product?.price.toFixed(2)}</label>
        </p>
      </div>

      <div className="options">
        <input defaultValue={1} type="number" />

        <button onClick={() => AddItem(id, product?.name, product?.price)}>
          Adicionar
        </button>
      </div>
    </Container>
  );
};

export default Product;
