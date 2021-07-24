import { Global, connect} from "frontity";
import Switch from "@frontity/components/switch";
import List from "./List";
import Post from "./Post";
import Loading from "./Loading";
import Title from "./Title";
import PageError from './Page404';
import {globalStyles, Main} from './styles'
import HeadTag from "./HeadTag";
import  SpacingProvider from '../contexts/SpacingContext'
import Navbar from '../components/styleguide/molecules/navbar'
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <SpacingProvider>
      <Title />
      <HeadTag/>
      <Global styles={globalStyles} />
      <Navbar/>
      <Main >
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} active={data.isPostType}/>
          <PageError when={data.isError} />
        </Switch>
      </Main>
    </SpacingProvider>
    
  );
};

export default connect(Theme);

