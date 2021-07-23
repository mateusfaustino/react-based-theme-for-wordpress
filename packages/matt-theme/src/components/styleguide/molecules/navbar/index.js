import React,{useState} from 'react';
import Logo from "./Logo/index"
import Menu from "./Menu/index"
import NavbarIcon from '../../atoms/navbarIcon';
import Nav,{NavWrapper} from './styles'
import { useSpacing } from '../../../../contexts/SpacingContext';


const Navbar = (props) => {
    const {spacing} = useSpacing()
    const [isActive,setIsActive]=useState(false);
    return (
        <NavWrapper 
            spacing={spacing}
            isActive={isActive} 
        >
            <Nav>
                <Logo/>
                <Menu isActive={isActive} setIsActive={()=>setIsActive(false)}/>
                <NavbarIcon close={isActive} onClick={()=>setIsActive(!isActive)}/>
            </Nav>

        </NavWrapper>
        
        
    )
}

export default Navbar
