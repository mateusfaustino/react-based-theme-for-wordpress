import React from 'react'
import Container from './styles'
import Link from '@frontity/components/link'
const Item = (props) => {
return(
<Container onClick={props.onClick}>
    <Link to={props.to}>
        {props.children}
    </Link>
</Container>
)
}
export default Item