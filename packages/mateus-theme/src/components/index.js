import Link from '@frontity/components/link'
import {connect} from 'frontity'
const Root = ({state}) => {
  
  return (
    <>
      
      <Link link='/about-us'>about us</Link>
      <Link link='/'>Home</Link>
      <p>Current URL:{state.router.link} </p>
    </>
  );
};
export default connect(Root)