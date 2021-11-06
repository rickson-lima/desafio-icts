import React, { useEffect, useState } from "react";

import Header from "../../components/Header";

import Purchase from "../../components/PurchaseCard";

import { Container, Wrap } from "./styles";

import api from "../../services/api";

export default function Purchases() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    async function fetchPurchases() {
      try {
        const response = await api.get("/purchases");

        setPurchases(response.data);
      } catch (error) {
        alert("Erro ao listar as compras");
      }
    }

    fetchPurchases();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h2>Histórico de Compras</h2>
        <Wrap>
          {purchases &&
            purchases.map((purchase) => {
              return <Purchase data={purchase} key={purchase.id} />;
            })}
        </Wrap>
      </Container>
    </>
  );
}
