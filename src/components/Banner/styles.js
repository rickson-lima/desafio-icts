import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-image: url("/hero.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 20rem;
  padding: 0 3rem;

  filter: grayscale(black, 80%);

  div {
    z-index: 1;
    h1,
    p {
      color: var(--white-color);
      strong {
        text-decoration: underline var(--primary-color) 2px;
      }
    }

    p {
      margin-top: 1rem;
      line-height: 1.25;
    }
  }

  .overlay {
    position: relative; /* Sit on top of the page content */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  }
`;
