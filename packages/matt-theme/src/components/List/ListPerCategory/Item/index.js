import { connect, styled } from "frontity";
import Link from "../../../Link";
import FeaturedMedia from "../../../FeaturedMedia";
import { PostDate } from "../../../Date";

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
    <Container link={item.link}>
      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>

      
        {/* If the post has an excerpt (short summary text), we render it */}
        {item.excerpt && (
          <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
        )}
        {/* If the post has an author, we render a clickable author text. */}
        <Details>
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
        </Details>
      


    </Container>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Title = styled.h1`
  grid-area: title;
  font-size: 2rem;
  color: rgba(12, 17, 43);
  margin: 0;
  box-sizing: border-box;
`;

const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  font-weight: 300;
    letter-spacing: normal;
    line-height: normal;
    text-transform: ;
    font-size: 0.75em;
    color: #6A6A6A;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  font-weight: 300;
    letter-spacing: normal;
    line-height: normal;
    text-transform: ;
    font-size: 0.75em;
    color: #6A6A6A;
`;

const Excerpt = styled.div`
  grid-area: excerpt;
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;
const Details = styled.div`
  grid-area: details;

`;
const Container = styled(Link)` 
  padding-top:16px;
  padding-bottom:16px;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-areas:
  "featured title "
  "featured excerpt "
  "featured details "
  ;
  gap:16px;
  border-bottom: 1px solid #000;
  @media screen and (max-width: 530px) {
    grid-template-columns: 50% 50%;
  }
  @media screen and (max-width: 440px) {
    grid-template-areas:
    "featured" 
    "title "
    "excerpt "
    "details "
    ; 
    grid-template-columns: 100%;
    gap:4px;
  }
`