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
  --dark-color: #474747;

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
button, select {
  font: 600 1rem 'Montserrat', sans-serif;
  color: var(--gray-color);
  border: none;
}
p,
textarea {
  font: 500 1rem 'Montserrat', sans-serif;
  color: var(---dark-color);
}
.drop-shadow {
  -webkit-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
}

a {
  text-decoration: none;
  color: var(--gray-color);
}

button {
  cursor: pointer;
  font-size: 1.15rem;
  line-height: 1.625rem;
  transition: all 0.2s;
  cursor: pointer;
  align-items: center;
  background-color: var(--secondary-color);
  border-radius: .25rem;
  color: var(--white-color);
  padding: .5rem;
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
