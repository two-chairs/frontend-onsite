import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { primary } from "../../../_constants/colors";
import BlogListing from "./BlogListing";
import { blogState } from "../state/blogSlice";

const Blog = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.blog.posts);
  const [countToShow] = useState(5);

  useEffect(() => {
    if (posts.length < countToShow) {
      fetch(
        `http://localhost:3004/data/frontend-challenge/posts?count=5&page=1`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(blogState.actions.loadPosts(data));
        });
    }
  }, [countToShow, dispatch, posts]);

  return (
    <>
      <BlogHeader />
      <BlogListing posts={posts} />
    </>
  );
};

const BlogHeader = () => {
  return (
    <BlogHeaderWrapper>
      <div>
        <h1>Two Chairs Blog</h1>
      </div>
    </BlogHeaderWrapper>
  );
};

const BlogHeaderWrapper = styled.header`
  width: 100vw;
  height: 240px;
  background-color: ${primary};
  display: flex;
  justify-content: center;

  > div {
    width: 100%;
    max-width: 968px;
    margin: auto;
  }
`;

export default Blog;
