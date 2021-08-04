import { connect, styled, decode } from "frontity";
import Item from "./Item";
import Pagination from "./Pagination";
import { useSpacing } from "../../../contexts/SpacingContext";
import HeaderComponent from "../../Header";
import {Header, Container} from './styles'
import ListPerCategory from '../ListPerCategory/list'
const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const {spacing,maxWidth} = useSpacing()
  const margin = spacing.margin
  return (
    <Container margin={margin} maxWidth={maxWidth}>
      
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
     
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )} 
    
      <HeaderComponent/>
      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        // Render one Item component for each one.
        const categorie = item.categories[0]
        return <Item key={item.id} item={item} />
      })}
      <Pagination />
      <ListPerCategory/>
    </Container>
  );
};

export default connect(List);
