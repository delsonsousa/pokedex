import styled from "styled-components";

export const DetailsContainer = styled.div`
  width: 100%;
  max-width: 1050px;
  height: 700px;
  margin: 5rem auto 0;
  padding: 2.5rem 3rem;
  border-radius: 15px;
  position: relative;

  background-color: ${({ theme }) => theme["yellow-500"]};
  border: 3px solid ${({ theme }) => theme["gray-700"]};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
`;

export const ButtonContainer = styled.div`
  width: calc(100% - 3rem - 40px);
  position: absolute;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    padding: 5px 20px;
    background-color: ${({ theme }) => theme["orange-700"]};
    border-radius: 6px;
    color: ${({ theme }) => theme.white};
  }

  a:last-child {
    background-color: ${({ theme }) => theme["green-700"]};
  }
`;

export const DetailsContent = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ul li {
    list-style: none;
  }
`;

export const AbilitiesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme["gray-700"]};
  margin-bottom: 20px;
  text-transform: capitalize;
`;

export const PokemonDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme["gray-700"]};
`;

export const StatusList = styled.ul`
  li {
    margin-bottom: 10px;

    p {
      font-size: 0.75rem;
    }
  }
`;

export const PowerBarContainer = styled.div`
  width: 100%;
  height: 10px;
  border: 1px solid ${({ theme }) => theme["gray-300"]};
  border-radius: 6px;
`;

export const PowerBar = styled.div`
  height: 10px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme["orange-700"]};
`;

export const PokemonPhoto = styled.img`
  width: 100%;
`;
