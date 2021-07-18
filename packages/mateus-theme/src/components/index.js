import Link from '@frontity/components/link'
import Switch from "@frontity/components/switch"
import { connect, Global, css, Head} from "frontity"
import List from './list'
import Post from './post'
import Page from './page'
import Navbar from './styleguide/molecules/navbar'
import ScreenProvider from '../contexts/Screen'
import SpacingProvider from '../contexts/SpacingContext'
import typography from './styleguide/atoms/typography'
import Loading from './Loading'
import Error from './Error'

const Root = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <>
      <Head>
        <title>Mateus Faustino</title>
        <meta
          name="description"
          content="Based on the Frontity step by step tutorial"
        />
      </Head>
      <Global
        styles={css`
          html {
            font-family: 'Roboto', sans-serif;
          }
          *{
            margin:0;
            padding: 0;
            box-sizing: border-box;
          }
          iframe{
            width:80vw;
            height:auto;
          }
          li{
            list-style:none;
          }
          a{
            text-decoration:none;
            color:#000;
          }
          p{
            ${typography.paragraph}
          }
          `}
          />
      <SpacingProvider>

        <Navbar/>
          <Switch>
            <List when={data.isArchive}/>
            <Post when={data.isPost}/>
            <Page when={data.isPage}/>
            <Page when={data.isDestinations} />
            <Loading when={data.isFetching}/>
            <Error when={data.isError} />
          </Switch>
      </SpacingProvider>
    </>
  )
}

export default connect(Root)