import { connect, styled,Global as global,css } from "frontity"
import scroll from './scroll'

const Globalstyle = (props) => 
<Globalstyle
  styles={css`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
    ${scroll}
  }
  
  li{
    list-style:none;
  }
  a{
    text-decoration:none;
    color:#000;
  }
    
    
    `
}
/>
    
export default Globalstyle
