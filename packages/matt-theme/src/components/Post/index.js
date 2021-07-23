import { useEffect } from "react";
import { connect} from "frontity";
import List from "../List";
import FeaturedMedia from "../FeaturedMedia";
import {Container, Title, StyledLink, Author, DateWrapper, Content, Excerpt} from './styles'
import { useSpacing } from "../../contexts/SpacingContext";
/**
 * The Post component that Mars uses to render any kind of "post type", like
 * posts, pages, attachments, etc.
 *
 * It doesn't receive any prop but the Frontity store, which it receives from
 * {@link connect}. The current Frontity state is used to know which post type
 * should be rendered.
 *
 * @param props - The Frontity store (state, actions, and libraries).
 *
 * @example
 * ```js
 * <Switch>
 *   <Post when={data.isPostType} />
 * </Switch>
 * ```
 *
 * @returns The {@link Post} element rendered.
 */
const Post = ({ state, actions, libraries, active }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, [actions.source]);

  const {spacing, maxWidth} = useSpacing()
  const margin = spacing.margin
  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container active={active} margin={margin} maxWidth={maxWidth}>
      <div>
        <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <Excerpt dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        {/* Hide author and date on pages */}
        {!data.isPage && (
          <div>
            {author && (
              <StyledLink link={author.link}>
                <Author>
                  por <b>{author.name}</b>
                </Author>
              </StyledLink>
            )}
            <DateWrapper>
              {" "}
              em <b>{date.toDateString()}</b>
            </DateWrapper>
          </div>
        )}
      </div>

      {/* Look at the settings to see if we should include the featured image */}
      {state.theme.featured.showOnPost && (
        <FeaturedMedia id={post.featured_media} />
      )}

      {data.isAttachment ? (
        // If the post is an attachment, just render the description property,
        // which already contains the thumbnail.
        <div dangerouslySetInnerHTML={{ __html: post.description.rendered }} />
      ) : (
        // Render the content using the Html2React component so the HTML is
        // processed by the processors we included in the
        // libraries.html2react.processors array.
        <Content>
          <Html2React html={post.content.rendered} />
        </Content>
      )}
    </Container>
  ) : null;
};

export default connect(Post);

