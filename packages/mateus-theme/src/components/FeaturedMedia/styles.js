import {styled} from "frontity";
import Image from "@frontity/components/image";


const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const StyledContainer = styled.div`
    margin-top: 16px;
    height: auto;
    width:100%;
    max-width:300px;
`
const Container = ({alt,src, width, height}) => {
    return(
        <StyledContainer>
            <StyledImage
                alt={alt}
                src={src}
                width={width}
                height={height}
            />
        </StyledContainer>
    )
}

export default Container