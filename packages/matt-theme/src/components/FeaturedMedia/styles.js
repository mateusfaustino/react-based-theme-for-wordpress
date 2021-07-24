import Image from "@frontity/components/image";
import { styled } from "frontity";

export const Container = styled.div`
  grid-area: featured;
  width:100%;
  ${({ isAmp }) => isAmp && "position: relative;"};
`;

export const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
