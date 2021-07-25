import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import { useSpacing } from "../../contexts/SpacingContext";
import HeaderComponent from "../Header";
const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const {spacing,maxWidth} = useSpacing()
  const margin = spacing.margin
  return (
    <Container margin={margin} maxWidth={maxWidth}>
{/*        
      If the list is a taxonomy, we render a title.
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
     {/*
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )} 
      */}
      <HeaderComponent/>
      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        // Render one Item component for each one.
        return <Item key={item.id} item={item} />;
      })}
      <Pagination />
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
  
  list-style: none;
  width: 100%;
  max-width: ${({maxWidth})=>maxWidth}; 
  margin: 0 ${({margin})=>margin};
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
