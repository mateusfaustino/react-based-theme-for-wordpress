import React from 'react'
import Container from './styles'
import Link from '@frontity/components/link'
const Item = (props) => {
return(
<Container  isPage={props.isPage} onClick={props.onClick}>
    <Link link={props.to}>
        {props.children}
    </Link>
</Container>
)
}
export default Item