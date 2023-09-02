import { styled } from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  alighn-items: center;
  justify-content: center;
`;
export const HeroWrapper = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }
`;
export const HeroGrid1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 768px) 
width:100%;
flex-direction: column;
  }
  `;
export const HeroGrid = styled.div`
width:20%
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeroImage = styled.image`
  width: 300px;
  height: 300px;
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;
