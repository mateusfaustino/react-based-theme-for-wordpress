import { connect, styled } from "frontity";
import Container from "./styles";
const FeaturedMedia = ({id, state}) => {
  const media = state.source.attachment[id];

  if (!media) return null;

  return (
    <Container
        alt={media.title.rendered}
        src={media.source_url}
        width={media?.media_details?.width}
        height={media?.media_details?.height}
    />

  );
};

export default connect(FeaturedMedia);

