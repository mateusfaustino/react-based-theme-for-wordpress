import React from "react"
import { connect } from "frontity"
import dayjs from "dayjs"
import Container from "./styles"
import { Title } from "./styles"
const Post = ({ state }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]
  const formattedDate = dayjs(post.date).format("DD MMMM YYYY")  
  return (
    <Container>
      <Title>{post.title.rendered}</Title>
      <p>
        <strong>Posted: </strong>
        {formattedDate}
      </p>
      <p>
        <strong>Author: </strong>
        {author.name}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </Container>
  )
}

export default connect(Post)