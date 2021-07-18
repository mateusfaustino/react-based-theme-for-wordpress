import React from 'react'
import Container from './styles'
import SVGLogo from '../../../../assets/logo.svg'
import Link from '@frontity/components/link'
const Brand = () => {
    return (
        <Container >
            <Link link='/'>
                <img src={SVGLogo} />
            </Link>
        </Container>
    )
}
export default Brand