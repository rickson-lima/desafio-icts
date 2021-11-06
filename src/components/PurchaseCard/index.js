import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./styles";

export default function Purchase({ data }) {
  const purchaseLink = `/purchases/${data.id}`;

  const purchaseTotal = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(data.total);

  return (
    <Link to={purchaseLink}>
      <Card>
        <h3>Código da compra: {data.id}</h3>
        <strong>Total: {purchaseTotal}</strong>
        <p>Médotodo de Pagamento: {data.payment_method}</p>
        <span>Status: {data.status}</span>
      </Card>
    </Link>
  );
}
