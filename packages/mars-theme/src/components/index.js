import { Global, connect, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./List";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import {globalStyles, HeadContainer, Main} from './styles'
import HeadTag from "./HeadTag";

const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      <Title />
      <HeadTag/>

      <Global styles={globalStyles} />

      <HeadContainer>
        <Header />
      </HeadContainer>

      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Theme);

