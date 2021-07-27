import Link from "../../Link";
import {styled} from 'frontity'
import {palette} from '../../styleguide/atoms/colors'

export const Title = styled.h2`
  grid-area: title;
  font-size: 30px;
  color: ${palette.primary.onDarkText  };
  margin: 0 0 8px 0;
  box-sizing: border-box;
  font-weight: 700;
`;
export const HeaderBar = styled.div`
  background: ${palette.primary.main};
  padding:8px;
  margin: 0 0 8px 0;
`;

export const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  font-weight: 300;
    letter-spacing: normal;
    line-height: normal;
    text-transform: ;
    font-size: 0.75em;
    color: #6A6A6A;
`;

export const StyledLink = styled(Link)`
  padding: 15px 0;
`;

export const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  font-weight: 300;
    letter-spacing: normal;
    line-height: normal;
    text-transform: ;
    font-size: 0.75em;
    color: #6A6A6A;
`;

export const Excerpt = styled.div`
grid-area: excerpt;
line-height: 1.6em;
display:flex;
justify-content: center;
margin-top:8px;
p{
    font-size:14px;
    font-weight: 700;
}
`;
export const Details = styled.div`
  grid-area: details;

`;
export const Container = styled.div` 
  padding-top:16px;
  padding-bottom:16px;
  display:flex;
  flex-direction:column;
  border-bottom:1px solid #000;
  
 
`