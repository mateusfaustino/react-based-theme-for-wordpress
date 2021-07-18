import { connect, styled } from "frontity"

import { useSpacing } from "../../../../contexts/SpacingContext"
import { palette } from "../../atoms/colors"

const Nav = (props)=>{
    const { spacing } = useSpacing()
    return(
        <StyledContainer isActive={props.isActive} isDisplayed={props.isDisplayed} spacing={spacing}>
            {props.children}
        </StyledContainer>
    )
}
export default Nav
const StyledContainer = styled.div`
    background:${props=>props.isActive? palette.primary.dark :palette.primary.main};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:4px ${props=>props.spacing.margin};
    right:0;
    top:0;
    transition:1s;
    z-index:1000;
    position:fixed;
    width:100%;
`
