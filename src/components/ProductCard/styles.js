import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  gap: 0.5rem;
  width: 12.5rem;

  margin: 1rem;
  margin-bottom: 2rem;

  p,
  h3 {
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
  p {
    font-size: 0.9rem;
    -webkit-line-clamp: 3;
  }

  h3 {
    height: 2.5rem;
    -webkit-line-clamp: 2;
    font-size: 1rem;
  }

  img {
    width: 12.5rem;
    height: 10rem;
  }

  span {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--primary-color);
  }
`;
