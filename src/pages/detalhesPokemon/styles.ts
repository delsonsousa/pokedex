import styled from "styled-components";

export const DetailsContainer = styled.div`
  width: 100%;
  max-width: 1050px;
  margin: 5rem auto 0;
  padding: 2.5rem 3rem;
  border-radius: 15px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;

  background-color: ${({ theme }) => theme["yellow-500"]};
  border: 3px solid ${({ theme }) => theme["gray-700"]};
`;

export const DetailsContent = styled.div`
  width: 33%;
  background-color: red;
`;
