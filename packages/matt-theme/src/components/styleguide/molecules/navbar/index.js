import React,{useState} from 'react';
import Logo from "./Logo/index"
import Menu from "./Menu/index"
import NavbarIcon from '../../atoms/navbarIcon';
import Nav from './styles'


const Navbar = (props) => {
    const [isActive,setIsActive]=useState(false);
    return (
        
            <Nav
                isActive={isActive}
            >
                <Logo/>
                <Menu isActive={isActive} setIsActive={()=>setIsActive(false)}/>
                <NavbarIcon close={isActive} onClick={()=>setIsActive(!isActive)}/>
            </Nav>
        
    )
}

export default Navbar
