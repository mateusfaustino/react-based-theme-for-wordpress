import { connect, styled } from "frontity"

const Row = styled.div`
    background:#fff;
    height:4px;
`
const Container = styled.div`
    height:32px;
    width: 32px;
    max-width:40px;
    padding:4px 2px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    transform: translateY(${props=>props.close?`50px`:`0`});
    transition:1s;
    #row01{
        transform: translateY(${props=>props.close?`10px`:`0`})  rotate(${props=>props.close?`45deg`:`0`}) scaleY(${props=>props.close?`0.8`:`1`});
        transition:1s;
    }
    #row02{
        transform:  scaleX(${props=>props.close?`0`:`1`});
        transition:1s;
    }
    #row03{
        transform: translateY(${props=>props.close?`-10px`:`0`})  rotate(${props=>props.close?`-45deg`:`0`}) scaleY(${props=>props.close?`0.8`:`1`});
        transition:1s;  
    }
    @media screen and (min-width: 755px) {
        display: none !important;
    }
      
`

const NavbarIcon = (props)=>{
    return(
        <Container onClick={props.onClick} close={props.close}>
            <Row id='row01'/>
            <Row id='row02'/>
            <Row id='row03'/>
        </Container>
    )
}
export default NavbarIcon