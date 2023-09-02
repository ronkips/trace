import { styled } from "styled-components";

export const ProducerContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ProducerWrapper = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 5% 0;
  @media screen and (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }
`;
