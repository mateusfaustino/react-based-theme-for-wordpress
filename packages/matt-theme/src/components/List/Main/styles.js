import {styled} from 'frontity'

export const Container = styled.section`  
list-style: none;
width: 100%;
max-width: ${({maxWidth})=>maxWidth}; 
margin: 0 ${({margin})=>margin};
`;

export const Header = styled.h3`
font-weight: 300;
text-transform: capitalize;
color: rgba(12, 17, 43, 0.9);
`;
