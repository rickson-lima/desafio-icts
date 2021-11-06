import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  gap: 0.5rem;
  width: 18rem;
  height: 12rem;

  padding: 1rem;

  margin: 1rem;
  margin-bottom: 2rem;

  border: 2px solid var(--secondary-color);

  }
  p {
    font-size: 0.9rem;
  }

  h3 {
    font-size: 1rem;
  }

  strong {
    color: var(--secondary-color);
  }

  span {
    color: var(--primary-color);
  }
`;
