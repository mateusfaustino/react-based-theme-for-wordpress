import {styled } from "frontity";
import Link from "../Link";
import { palette } from "../styleguide/atoms/colors";
import typography from '../styleguide/atoms/typography'

export const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  background-color: ${palette.background.light};
  margin: 73px 0 0;
  `;
export const Container = styled.div`
width: 100%;
max-width: 100%;
box-sizing: border-box;
color: ${palette.primary.main};
display: flex;
flex-direction: column;
justify-content: space-around;
padding-bottom:8px;
max-width: ${({maxWidth})=> maxWidth};
border-bottom:1px solid ${palette.primary.main};
`;

export const Title = styled.h2`
display:flex;
align-items:center;
justify-content:center;
margin: 0;
margin-bottom: 16px;
`;

export const Description = styled.h4`
  margin: 0;
  ${typography.header5}
  font-weight:200;
  color: ${palette.primary.main};
  `;

  export const StyledLink = styled(Link)`
  text-decoration: none;
  `;
  