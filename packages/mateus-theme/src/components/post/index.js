import React from "react"
import { connect, Head } from "frontity"
import dayjs from "dayjs"
import Container from "./styles"
import { Title } from "./styles"
const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]
  const formattedDate = dayjs(post.date).format("DD MMMM YYYY")  
  const Html2React = libraries.html2react.Component
  return (
    <Container>
      <Head>
        <title>{post.title.rendered}</title>
        <meta name="description" content={post.excerpt.rendered} />
      </Head>
      <Title>{post.title.rendered}</Title>
      <p>
        <strong>Posted: </strong>
        {formattedDate}
      </p>
      <p>
        <strong>Author: </strong>
        {author.name}
      </p>
      <Html2React html={post.content.rendered} />
    </Container>
  )
}

export default connect(Post)