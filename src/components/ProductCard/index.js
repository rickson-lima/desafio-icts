import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./styles";

export default function Product({ data, showButton }) {
  const IMG_PLACEHOLDER =
    "https://patriciaelias.com.br/wp-content/uploads/2021/01/placeholder.png";

  const productLink = `/products/${data.id}`;

  const productPrice = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(data.price);

  return (
    <Link to={productLink}>
      <Card>
        <img src={data.image_url || IMG_PLACEHOLDER} alt={data.name} />
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <span>{productPrice}</span>

        {showButton && <button>Comprar</button>}
      </Card>
    </Link>
  );
}
