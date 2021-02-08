import React from "react";
import styled from "styled-components";
import BlogPost from "./BlogPost";

const BlogListing = (props) => {
  const { posts } = props;  

  const postsData = posts || [];

  return (
    <BlogListingWrapper>
      <BlogListingGrid>
        {postsData.map((post) => (
          <BlogPost post={post} key={Math.floor(Math.random() * 100)} />
        ))}
      </BlogListingGrid>
    </BlogListingWrapper>
  );
};

const BlogListingWrapper = styled.div`
  width: 100%;
  max-width: 968px;
  margin: auto;
  padding: 24px 0;
`;

const BlogListingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 24px;
  row-gap: 24px;
`;

export default BlogListing;
