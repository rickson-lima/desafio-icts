import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useParams } from "react-router";
import dayjs from "dayjs";

import api from "../../services/api";
import Header from "../../components/Header";
import { Container, Form, InputWrapper, ButtonWrapper, Wrap } from "./styles";
import Product from "../../components/ProductCard";

function PurchaseDetails(props) {
  const [purchase, setPurchase] = useState({
    id: null,
    total: null,
    payment_method: "",
    status: "",
    products: [],
    created_at: "",
  });

  const { id } = useParams();

  useEffect(() => {
    async function fetchPurchase() {
      try {
        const response = await api.get(`/purchases/${id}`);

        setPurchase(response.data);
      } catch (error) {
        alert("Erro ao listar a compra");
      }
    }

    fetchPurchase();
  }, []);

  const handlePurchaseUpdate = async (e) => {
    e.preventDefault();
    try {
      setPurchase((prev) => ({ ...prev, id }));
      await api.put(`/purchases/${id}`, purchase);

      alert("Produto atualizado com sucesso");

      setTimeout(() => {
        props.history.go();
      }, 500);
    } catch (error) {
      alert("Houve um problema ao atualizar este produto.");
    }
  };

  const deletePurchase = async () => {
    try {
      await api.delete(`/purchases/${id}`);

      alert("Compra deletada com sucesso");

      setTimeout(() => {
        props.history.push("/");
        props.history.go();
      }, 500);
    } catch (error) {
      alert("Houve um problema ao deletar esta compra.");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handlePurchaseUpdate}>
          <h2>Detalhes da compra: {id}</h2>

          <fieldset>
            <InputWrapper>
              <label for="payment-method-select">Metodo de pagamento</label>

              <select
                id="payment-method-select"
                name="payment_method"
                onChange={(e) =>
                  setPurchase((prev) => ({
                    ...prev,
                    payment_method: e.target.value,
                  }))
                }
              >
                <option value={purchase.payment_method} selected>
                  {" "}
                  {purchase.payment_method}
                </option>
                <option value="Débito">Débito</option>
                <option value="Crédito">Crédito</option>
                <option value="Boleto">Boleto</option>
              </select>
            </InputWrapper>

            <InputWrapper>
              <label for="status-select">Status da compra</label>

              <select
                id="status-select"
                name="status"
                onChange={(e) =>
                  setPurchase((prev) => ({
                    ...prev,
                    payment_method: e.target.value,
                  }))
                }
              >
                <option value={purchase.status} selected>
                  {" "}
                  {purchase.status}
                </option>
                <option value="Aguardando pagamento">
                  Aguardando pagamento
                </option>
                <option value="Finalizado">Finalizado</option>
                <option value="Cancelado">Cancelado</option>
              </select>
            </InputWrapper>

            <p>
              Criado em{" "}
              <span>
                {dayjs(purchase.created_at).format("DD/MM/YYYY HH:mm:ss")}
              </span>
            </p>

            <h2>Produtos da compra</h2>
            <Wrap>
              {purchase.products &&
                purchase.products.map((product) => (
                  <Product data={product} key={product.id} />
                ))}
            </Wrap>

            <ButtonWrapper>
              <button type="button" className="delete" onClick={deletePurchase}>
                Deletar compra
              </button>

              <button type="submit">Atualizar compra</button>
            </ButtonWrapper>
          </fieldset>
        </Form>
      </Container>
    </>
  );
}

export default withRouter(PurchaseDetails);
