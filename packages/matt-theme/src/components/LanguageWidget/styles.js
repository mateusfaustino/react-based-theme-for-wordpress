import { styled } from 'frontity'

const StyledContainer = styled.div`
display:flex;
flex-direction:column;
align-items:flex-end;
margin: 8px 0;
padding: 8px 0;
img{
    width:30px;
    height:auto;
    @media (min-width: 750px) {
        width:50px;
        height:auto;
    }
}
`
const Container = (props) => {
    return(
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}

export default Container