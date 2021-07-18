import {styled } from "frontity";
import Link from "../Link";
import { palette } from "../styleguide/atoms/colors";
export const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: ${palette.primary.onMainText};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top:40px;
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

export const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${palette.primary.main};
`;
