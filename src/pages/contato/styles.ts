import styled from "styled-components";

export const TransactionsContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 1.5rem;
  border-radius: 15px;

  background-color: ${({ theme }) => theme["yellow-500"]};
  border: 3px solid ${({ theme }) => theme["gray-700"]};
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  gap: 20px;
  flex-direction: column;

  input {
    display: flex;
    width: 50%;
    height: 40px;
    border-radius: 6px;
    padding: 0 10px;

    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    border: none;
  }

  textarea {
    padding: 10px;
    height: 200px;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    border: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: block;
    padding: 0 50px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme["orange-700"]};
    color: ${({ theme }) => theme.white};
    font-weight: bold;
    border: none;
    text-decoration: none;
    line-height: 40px;

    &:hover {
      filter: brightness(90%);
      transition: filter 0.2s;
    }
  }

  button {
    width: 150px;
    height: 40px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme["green-700"]};
    color: ${({ theme }) => theme.white};
    font-weight: bold;
    border: none;
    cursor: pointer;

    &:hover {
      filter: brightness(90%);
      transition: filter 0.2s;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
