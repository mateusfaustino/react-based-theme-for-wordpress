import { connect, styled } from "frontity"
import { palette } from "../../../../atoms/colors"

const StyledContainer = styled.li`
    width:100%;
    padding: 16px 0;
    list-style:none;
    &:not(:last-child){
        border-bottom: 1px solid ${props=>props.isPage? palette.secondary.main: '#fff'};

    }

    a{
        display: flex;
        font-family: sans-serif;
        text-decoration:none;
        font-size:16px;
        color: ${props=>props.isPage? palette.secondary.main: '#fff'};
        font-weight: ${props=>props.isPage? 'bold': '200'};
        transform: scale(1) ;
        transition: 0.5s ;
    }
    @media screen and (min-width: 755px) {
            width:auto;
            list-style:none;
            padding:0;
            &:not(:last-child){
                border-bottom: none;
            }
        a{
            display: flex;
            margin-right: 16px;
            font-family: sans-serif;
            font-weight: 600;
            transform: scale(${props=>props.isPage? '1.1': '1'}) ;
            &:hover,
            &:focus {
                background-color: rgba(0, 0, 0, 0.1);
            }
            
        }

  


`
const Container = (props)=>{
return(
<StyledContainer isPage={props.isPage} onClick={props.onClick}>
{props.children}
</StyledContainer>
)
}
export default Container