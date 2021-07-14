import React from 'react'
import Container from './styles'
import Item from './Item'
import {menu} from '../../../../../matt.settings'
const Menu = (props) => {
    return( 
        <Container active={props.isActive} >
        {menu.map((item,index)=>{
            return(
                <Item to={item.link} key={index}>
                    {item.title}
                </Item>
            )
        })}
        </Container>
    )
}
export default Menu