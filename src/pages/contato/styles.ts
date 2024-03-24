import { styled } from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 1.5rem;
  border-radius: 15px;

  background-color: ${({ theme }) => theme["gray-700"]};
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.2);
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

    background-color: ${({ theme }) => theme["gray-600"]};
    color: ${({ theme }) => theme["gray-400"]};
    border: none;
  }

  textarea {
    padding: 10px;
    height: 200px;
    border-radius: 6px;

    background-color: ${({ theme }) => theme["gray-600"]};
    color: ${({ theme }) => theme["gray-400"]};
    border: none;
  }

  button {
    width: 150px;
    height: 40px;
    margin-inline: calc(100% - 150px);
    border-radius: 6px;
    background-color: ${({ theme }) => theme["green-300"]};
    color: ${({ theme }) => theme.white};
    font-weight: bold;
    border: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
