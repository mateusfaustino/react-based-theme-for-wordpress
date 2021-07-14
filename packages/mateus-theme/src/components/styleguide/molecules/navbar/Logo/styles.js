import { connect, styled } from "frontity"

const StyledContainer = styled.div`
    
`
const Container = (props)=>{
    return(
        <StyledContainer>
            {props.children}
        </StyledContainer>
    )
}
export default Container