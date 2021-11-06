import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import api from "../../services/api";
import Header from "../../components/Header";
import { Container, Form, InputWrapper, ButtonWrapper } from "./styles";

function NewProduct(props) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    image_url:
      "https://patriciaelias.com.br/wp-content/uploads/2021/01/placeholder.png",
    price: null,
  });

  const handleProductCreate = async (e) => {
    e.preventDefault();
    const { name, price, description } = product;

    if (!name || !price || !description) {
      return alert("Preencha todos os campos!");
    }

    try {
      const response = await api.post(`/products`, product);
      console.log(response.data);
      alert("Produto cadastrado com sucesso");

      setTimeout(() => {
        props.history.push("/");
        props.history.go();
      }, 500);
    } catch (error) {
      alert("Houve um problema ao cadastrar este produto.");
    }
  };

  const goBack = () => {
    setProduct({
      name: "",
      description: "",
      image_url: "",
      price: null,
    });

    props.history.goBack();
  };

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleProductCreate}>
          <h2>Cadastrar novo produto</h2>
          <fieldset>
            <InputWrapper>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                onChange={(e) =>
                  setProduct((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </InputWrapper>

            <InputWrapper>
              <label htmlFor="description">Descrição</label>
              <textarea
                name="description"
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
                onChange={(e) =>
                  setProduct((prev) => ({ ...prev, price: e.target.value }))
                }
              />
            </InputWrapper>

            <ButtonWrapper>
              <button type="button" className="delete" onClick={goBack}>
                Cancelar
              </button>

              <button type="submit">Cadastrar produto</button>
            </ButtonWrapper>
          </fieldset>
        </Form>
      </Container>
    </>
  );
}

export default withRouter(NewProduct);
