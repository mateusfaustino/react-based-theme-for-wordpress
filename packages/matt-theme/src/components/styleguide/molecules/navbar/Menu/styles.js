import { connect, styled } from "frontity"

import { palette } from '../../../atoms/colors'
const StyledContainer = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 45px 40px 8px;
    flex-direction: column;
    background:${palette.primary.dark};
    position: fixed;
    top: 40px;
    left: 0;
    width: 100%;
    height: calc(100vh - 40px);
    z-index: 0;
    transform: translateX(${props => props.active ? '0' : '100vw' });
    transition: 1s;
    z-index:-1;



    @media screen and (min-width: 755px) {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            background-color: transparent;
            position:initial;
            width: auto;
            transform: none;
            padding: 0;
            height: 100%;
            border-top:none;
            
        }
    }

`
const Container = (props)=>{
return(
<StyledContainer active={props.active} setIsActive={()=>props.setIsActive(false)}>
{props.children}
</StyledContainer>
)
}
export default Container