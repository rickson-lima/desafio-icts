import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./styles/globals";

const AppRoutes = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route exact path="/" element={<h1>Home | Products</h1>} />
      <Route path="/purchase" element={<h1>Purchase</h1>} />

      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
