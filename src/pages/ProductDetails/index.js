import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useParams } from "react-router";
import dayjs from "dayjs";

import api from "../../services/api";
import Header from "../../components/Header";
import { Container, Form, InputWrapper, ButtonWrapper } from "./styles";

function ProductDetails(props) {
  const [product, setProduct] = useState({
    id: null,
    name: "",
    description: "",
    image_url: "",
    price: null,
    created_at: "",
    updated_at: "",
  });

  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await api.get(`/products/${id}`);

        setProduct(response.data);
      } catch (error) {
        alert("Erro ao listar o produto");
      }
    }

    fetchProduct();
  }, []);

  const handleProductUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/products/${id}`, product);

      alert("Produto atualizado com sucesso");

      setTimeout(() => {
        props.history.push("/");
        props.history.go();
      }, 500);
    } catch (error) {
      alert("Houve um problema ao atualizar este produto.");
    }
  };

  const deleteProduct = async () => {
    try {
      await api.delete(`/products/${id}`);

      alert("Produto deletado com sucesso");

      setTimeout(() => {
        props.history.push("/");
        props.history.go();
      }, 500);
    } catch (error) {
      alert("Houve um problema ao deletar este produto.");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleProductUpdate}>
          <h2>Detalhes do produto: {id}</h2>
          <fieldset>
            <InputWrapper>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={(e) =>
                  setProduct((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="description">Descrição</label>
              <textarea
                name="description"
                value={product.description}
                rows="6"
                onChange={(e) =>
                  setProduct((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              ></textarea>
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="image_url">Url da imagem</label>
              <input
                type="url"
                name="image_url"
                value={product.image_url}
                onChange={(e) =>
                  setProduct((prev) => ({ ...prev, image_url: e.target.value }))
                }
              />
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="price">
                Preço <small>R$</small>
              </label>
              <input
                type="number"
                step=".1"
                name="price"
                value={product.price}
                onChange={(e) =>
                  setProduct((prev) => ({ ...prev, price: e.target.value }))
                }
              />
            </InputWrapper>

            <p>
              Criado em{" "}
              <span>
                {dayjs(product.created_at).format("DD/MM/YYYY HH:mm:ss")}
              </span>{" "}
              | Atualizado em{" "}
              <span>
                {dayjs(product.updated_at).format("DD/MM/YYYY HH:mm:ss")}
              </span>
            </p>

            <ButtonWrapper>
              <button type="button" className="delete" onClick={deleteProduct}>
                Deletar produto
              </button>

              <button type="submit">Atualizar produto</button>
            </ButtonWrapper>
          </fieldset>
        </Form>
      </Container>
    </>
  );
}

export default withRouter(ProductDetails);
