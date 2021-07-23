import { connect, styled } from "frontity"
const StyledContainer = styled.div`
        img{
            width:auto;
            height:44px;
            
        }
&.onDark{
    svg{
        #wave-up{
            fill:#fff;
        }
        
        #wave-down{
            fill:#fff;
        }
        #down-sail-right{
            fill:#fff;
        }
        #down-sail-left{
            fill:#cacaca;
        }
        #up-sail-right{
            fill:#fff;
        }
        #up-sail-left{
            fill:#cacaca;
        }
        #hull{
            path{
                fill:#fff;
            }
            #hull-left{
                fill:#cacaca;
            }
        }
    }
}
`
const Container = (props)=>{
    return(
        <StyledContainer className='onDark'>
        {props.children}
        </StyledContainer>
    )
}
export default Container