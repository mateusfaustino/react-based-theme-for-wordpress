import { connect, styled } from "frontity"

const StyledContainer = styled.li`
    width:100%;
    padding: 16px 0;
    list-style:none;
    &:not(:last-child){
        border-bottom: 1px solid #fff;
    }

    a{
        display: flex;
        color: #fff;
        font-family: sans-serif;
        text-decoration:none;
        font-size:16px;
        font-weight: 200;
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
            color: #fff;
            margin-right: 16px;
            font-family: sans-serif;
            font-weight: 600;
        }

`
const Container = (props)=>{
return(
<StyledContainer onClick={props.onClick}>
{props.children}
</StyledContainer>
)
}
export default Container