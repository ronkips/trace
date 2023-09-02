import { styled } from "styled-components";

export const CommonText = styled.p`
  width: 50%;
  color: #314f8c;
  font-family: Poppins;
  font-size: clamp(0.875rem, 0.8393rem + 0.1786vw, 1rem);
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
