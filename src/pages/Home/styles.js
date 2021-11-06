import styled from "styled-components";

export const NavigationBar = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: var(--primary-color);

  a {
    color: var(--white-color);
    padding: 1rem 4rem;
    transition: all 0.2s;
  }

  a:hover {
    background-color: var(--secondary-color);
  }
`;

export const Container = styled.div`
  padding: 2rem 5rem;

  & > div:nth-of-type(1) {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
    }
  }
`;

export const Wrap = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
`;
