import { connect } from "frontity";
import NavBar from '../styleguide/molecules/navbar'
import {Container, StyledLink, Description, Title, HeadContainer} from './styles'

const Header = ({ state }) => {
  return (
    <HeadContainer>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
      </Container>
      <NavBar/>
    </HeadContainer>
   
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

