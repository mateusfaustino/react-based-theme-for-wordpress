import {styled} from 'frontity'
import { useSpacing } from '../../contexts/SpacingContext'
import typography from '../styleguide/atoms/typography'
const StyledContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
margin-top:72px;
padding:0 ${props=>props.margin};
`
export const Title = styled.h2`
    ${typography.header2}
`
const Container = (props)=>{
const {spacing} = useSpacing()
return(
<StyledContainer margin={spacing.margin}>
{props.children}
</StyledContainer>
)
}
export default Container