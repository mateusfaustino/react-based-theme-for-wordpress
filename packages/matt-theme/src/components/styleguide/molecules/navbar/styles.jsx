import { styled } from "frontity"
import { useSpacing } from "../../../../contexts/SpacingContext"
import { palette } from "../../atoms/colors"
const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:2px ${props=>props.spacing.margin};
    right:0;
    background:${props=>props.isActive? palette.primary.dark :palette.primary.main};
    z-index:10000;
    position:fixed;
    top:0;
    width:100%;
    transform: translateY(${props=>props.isDisplayed?`0`:'-52px'});
    transition:0.5s;

`

const Nav = (props)=>{
    const { spacing } = useSpacing()
    return(
        <StyledContainer isActive={props.isActive} isDisplayed={props.isDisplayed} spacing={spacing}>
            {props.children}
        </StyledContainer>
    )
}
export default Nav