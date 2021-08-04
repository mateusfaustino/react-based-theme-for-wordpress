import {styled} from 'frontity'
import {palette} from '../../styleguide/atoms/colors'

export const Container = styled.section`  
list-style: none;
width: 100%;
max-width: ${({maxWidth})=>maxWidth}; 
margin: 0 ${({margin})=>margin};
`;

export const Header = styled.div`
display:flex;
background:${palette.primary.main};
margin: 16px 0  0 0;
justify-content:space-between;
align-items:center;
padding: 4px 8px;
width:100%;

h3{
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.1em;
    line-height: 1.2;
    text-transform: uppercase;
    padding:2px 0;
    position: relative;
    display: inline-block;
    color:${palette.primary.onMainText};
}
a{
    color:${palette.primary.onMainText};

}




`;
