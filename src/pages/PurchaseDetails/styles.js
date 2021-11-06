import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;

  h2 {
    text-align: center;
    text-decoration: underline var(--primary-color);
  }

  fieldset {
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.25rem;
  }

  span {
    color: var(--primary-color);
    font-weight: 700;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 1rem;

  img {
    width: 15rem;
  }

  label {
    display: block;
    margin-bottom: 0.25rem;
    color: var(--secondary-color);
  }

  select {
    border: 1px solid var(--dark-color);
    border-radius: 0.25rem;
    width: 100%;

    padding: 0.5rem 1rem;
    color: black;
  }

  textarea {
    resize: vertical;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 0 3rem;
  }

  button.delete {
    background-color: var(--delete);
  }
`;

export const Wrap = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
`;
