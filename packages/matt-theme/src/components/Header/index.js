import { connect } from "frontity";
import {Container, StyledLink, Description, Title, HeadContainer} from './styles'
import { useSpacing } from "../../contexts/SpacingContext";
const Header = ({ state }) => {
  const {spacing,maxWidth} = useSpacing()
  const margin = spacing.margin
  return (
    <HeadContainer margin={margin} maxWidth={maxWidth}>
      
      <Container margin={margin} maxWidth={maxWidth}>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
      </Container>
      
    </HeadContainer>
   
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

