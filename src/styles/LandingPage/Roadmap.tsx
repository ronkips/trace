import { styled } from "styled-components";

export const RoadmapContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  width: 70%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/roadmap.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding:5% 0;
  @media screen and (max-width: 768px) {
 width: 80%;
  height: 250px;
  background-size: contain;

`;
