import React from 'react'
import Container from './styles'
import Item from './Item'
import {menu} from '../../../../../matt.settings'
import {connect} from   'frontity'
const Menu = ({isActive,state,setIsActive}) => {
    const { menu } = state.theme;
    return( 
        <Container active={isActive} >
        {menu.map(([name, link])=>{
            return(
                <Item onClick={setIsActive} to={link} key={name} isPage={state.router.link === link?true:false}>
                    {name}
                </Item>
            )
        })}
        </Container>
    )
}
export default connect(Menu)
