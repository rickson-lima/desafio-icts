import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Product from "../../components/ProductCard";

import { Container, Wrap, NavigationBar } from "./styles";

import api from "../../services/api";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = document.title + " | Home";

    async function fetchProducts() {
      try {
        const response = await api.get("/products");

        setProducts(response.data);
      } catch (error) {
        alert("Erro ao listar os produtos");
      }
    }

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <NavigationBar>
        <Link to="/products/new">Adicionar produto</Link>
        <Link to="/purchases">Ver compras</Link>
      </NavigationBar>
      <Container>
        <div>
          <h2>Nossos Produtos</h2>
          <p>
            Frete grátis e entrega rápida é aqui, aproveite por tempo limitado.
          </p>
        </div>

        <Wrap>
          {products &&
            products.map((product) => {
              return <Product data={product} key={product.id} showButton />;
            })}
        </Wrap>
      </Container>
    </>
  );
}
