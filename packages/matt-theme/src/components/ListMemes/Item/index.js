import { connect, styled } from "frontity";
import Link from "../../Link";
import FeaturedMedia from "../../FeaturedMedia";
import { PostDate } from "../../Date";
import {HeaderBar,Title,AuthorName,StyledLink,PublishDate,Excerpt,Details, Container} from './styles'

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author];

  return (
    <Container>
      <HeaderBar>
          <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      
          {author && (
            <StyledLink link={author.link}>
              <AuthorName>
                Por <b>{author.name}</b>
              </AuthorName>
            </StyledLink>
          )}
          <PublishDate>
            {" "}
            em <b>{PostDate(item.date)}</b>
          </PublishDate>

      </HeaderBar>
      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}
      

      
        {/* If the post has an excerpt (short summary text), we render it */}
        {item.excerpt && (
          <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
        )}
        {/* If the post has an author, we render a clickable author text. */}
        
      


    </Container>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);