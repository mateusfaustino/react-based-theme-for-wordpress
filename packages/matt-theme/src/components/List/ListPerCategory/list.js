import { connect, styled, decode } from "frontity";
import Item from "./Item";
import Pagination from "./Pagination";
import { useSpacing } from "../../../contexts/SpacingContext";
import HeaderComponent from "../../Header";
import {Header, Container} from './styles'
import {getPostsGroupedByCategory} from '../../../helpers'
import Link from "@frontity/components/link";

const ListPerCategory = ({ state, actions, libraries }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link)
  const postsPerCategory = getPostsGroupedByCategory(state.source)
  console.log("postsPerCategory", postsPerCategory)
  const Html2React = libraries.html2react.Component;
  const {spacing,maxWidth} = useSpacing()
  const margin = spacing.margin
  return (
    <>
      {
          postsPerCategory.map(({ posts, category }, index) => (
            <div key={index}>
                <Header>{category.name}</Header>
                {posts.map((post, index) => (
                    <Item key={index} item={post} />  
                ))}
                <Link link={category.link}>
                  <p>&gt;&gt; Veja mais posts de <strong>{category.name}</strong></p>
                </Link>
            </div>
          ))
        }
    </>
    
  );
};

export default connect(ListPerCategory);

