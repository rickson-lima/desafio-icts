import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}
:root {
  --primary-color: #DE8423;
  --secondary-color: #346182;
  --gray-color: #4B4746;
  --white-color: #f0f0f0;

  --delete: #eb3b35;
}
body, html {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
}
body,
input,
button {
  font: 600 1rem 'Montserrat', sans-serif;
  color: var(--gray-color);
  border: none;
}
p,
textarea {
  font: 500 1rem Inter;
  color: var(---gray-color);
}
.drop-shadow {
  -webkit-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
}

.button {
  cursor: pointer;
  font-size: 1.15rem;
  line-height: 1.625rem;
  transition: all 0.2s;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}
@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
`;

export const AppBackground = createGlobalStyle`
  body {
    background-color: var(--background-dark);
  }
`;
