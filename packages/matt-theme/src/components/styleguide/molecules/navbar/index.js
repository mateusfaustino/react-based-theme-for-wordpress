import React,{useState} from 'react';
import Logo from "./Logo/index"
import Menu from "./Menu/index"
import Spacing from '../../atoms/spacing';
import NavbarIcon from '../../atoms/navbarIcon';
import Nav from './styles'
const spacing = new Spacing(7,'16px','10vw')

const Navbar = (props) => {
    const [isActive,setIsActive]=useState(false);
    return (
            <Nav
                
                isActive={isActive}
            >
                <Logo isActive={isActive}/>
                <Menu isActive={isActive} setIsActive={()=>setIsActive(false)}/>
                <NavbarIcon close={isActive} onClick={()=>setIsActive(!isActive)}/>
            </Nav>
        
    )
}

export default Navbar
