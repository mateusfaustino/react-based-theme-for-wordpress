import { Global, css, connect, styled, Head } from "frontity";
import typography from './styleguide/atoms/typography'
export const globalStyles = css`
  
  a,
  a:visited {
    color: inherit;
    text-decoration: none; 

  }
  html {
    font-family: 'Roboto', sans-serif;
  }
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
  iframe{
    width:80vw;
    height:auto;
  }
  li{
    list-style:none;
  }
  a{
    text-decoration:none;
    color:#000;
  }
  p{
    ${typography.paragraph}
  }
`;



export const Main = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
  
`;
