import styled from "styled-components";

export const PokedexContainer = styled.main`
  width: 100%;
  max-width: 1050px;
  margin: 5rem auto 0;
  padding: 2.5rem 3rem;
  border-radius: 15px;

  background-color: ${({ theme }) => theme["yellow-500"]};
  border: 3px solid ${({ theme }) => theme["gray-700"]};
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 80px;
  text-align: center;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) => theme.black};
    left: calc(50% - 40px);
    bottom: -10px;
  }
`;
