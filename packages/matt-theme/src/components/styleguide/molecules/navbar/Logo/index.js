import React from 'react'
import Container from './styles'
import Brand from '../../../atoms/Brand'
const Logo = (props) => {
    return(
        <Container isActive={props.isActive}>
            <Brand/>
        </Container>
    )
}
export default Logo