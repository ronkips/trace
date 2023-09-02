import { styled } from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;
export const AboutWrapper = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    width: 90%;
    flex-direction: column-reverse;
  }
`;
