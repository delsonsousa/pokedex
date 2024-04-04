import styled from "styled-components";

type ElementBackgroundProps = {
  variant: "fire" | "water" | "grass";
};

export const CardContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const CardContent = styled.div<ElementBackgroundProps>`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  background: ${({ theme, variant }) =>
    (variant === "water" && theme["blue-300"]) ||
    (variant === "fire" && theme["orange-300"]) ||
    (variant === "grass" && theme["green-300"]) ||
    theme["white"]};
  border: 2px solid ${({ theme }) => theme["gray-700"]};
  border-radius: 16px;
  box-shadow: 5px 5px 0px ${({ theme }) => theme["gray-700"]};
  padding: 20px;
  width: 200px;
  height: 280px;
`;

export const CardImageBackground = styled.div<ElementBackgroundProps>`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: ${({ theme, variant }) =>
    (variant === "water" && theme["blue-500"]) ||
    (variant === "fire" && theme["orange-500"]) ||
    (variant === "grass" && theme["green-500"]) ||
    theme["gray-300"]};
  border-radius: 50%;
  overflow: hidden;
`;

export const CardImage = styled.img`
  position: relative;
  width: 110px;
  z-index: 2;
`;

export const CardName = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.25rem;
  margin: 10px 0;
`;

export const CardDescription = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CardTypeContainer = styled.div<{ variant: string }>`
  display: inline-block;
  padding: 0px 5px;
  width: 60px;
  border-radius: 16px;
  background-color: ${({ theme, variant }) => {
    if (variant.includes("fire")) {
      return theme["orange-700"];
    } else if (variant.includes("grass")) {
      return theme["green-700"];
    } else if (variant.includes("water")) {
      return theme["blue-700"];
    } else if (variant.includes("poison")) {
      return theme.violet;
    } else {
      return theme["gray-300"];
    }
  }};
  box-shadow: 3px 3px 0px ${({ theme }) => theme.black};
  margin-top: 20px;
  margin-inline: 5px;
  text-align: center;

  span {
    line-height: 25px;
  }
`;

export const CardDetail = styled.span`
  font-weight: normal;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;
