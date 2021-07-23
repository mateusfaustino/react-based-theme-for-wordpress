import React from 'react'
import Container from './styles'
import { Link } from 'frontity'
const Item = (props) => {
return(
<Container onClick={props.onClick}>
    <Link >
        {props.children}
    </Link>
</Container>
)
}
export default Item