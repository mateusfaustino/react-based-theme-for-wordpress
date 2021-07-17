import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import Image from "@frontity/components/image";
import featuredMedia from "../FeaturedMedia/index";
import FeaturedMedia from "../FeaturedMedia/index";
const List = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link)
  const Html2React = libraries.html2react.Component

  return (
    <Items>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id]
        const itemData = state.source[item.type][item.id]
        const media = state.source.attachment[itemData.featured_media]
        return (
          <Link key={item.id} link={post.link}>

            <FeaturedMedia id={itemData.featured_media}/>
            <h2>
              {post.title.rendered}
            </h2>
            <Html2React html={post.excerpt.rendered} />
            <p>
              here:
               {/* {state.source.attachment[item.id].featured_media}  */}
            </p>
            
            
          </Link>
        )
      })}
      <PrevNextNav>
        {data.previous && (
          <button
            onClick={() => {
              actions.router.set(data.previous)
            }}
          >
            &#171; Prev
          </button>
        )}
        {data.next && (
          <button
            onClick={() => {
              actions.router.set(data.next)
            }}
          >
            Next &#187;
          </button>
        )}
      </PrevNextNav>
    </Items>
  )
}

export default connect(List)

const Items = styled.div`
  margin-top:73px;
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: #000;
    text-decoration: none;
  }
`
const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`
