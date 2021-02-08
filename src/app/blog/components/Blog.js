/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { primary } from "../../../_constants/colors";
import BlogListing from "./BlogListing";
import LoadMoreButton from "./LoadMoreButton";
import { blogState } from "../state/blogSlice";

const Blog = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.blog.posts);
  const [countToShow] = useState(10);
  const [pageIndex, setPageIndex] = useState(1);

  const getPosts = async (count, pageIndex) =>
    fetch(
      `http://localhost:3004/data/frontend-challenge/getPosts?count=${count}&page=${pageIndex}`
    ).then((res) => res.json());

  // get initial set of posts
  useEffect(() => {
    getPosts(countToShow).then((data) => {
      dispatch(blogState.actions.loadPosts(data));
    });
  }, []);

  const loadMorePosts = () => {
    const nextPageIndex = pageIndex + 1;
    getPosts(countToShow, nextPageIndex).then((data) => {
      dispatch(blogState.actions.loadPosts(data));
      setPageIndex(nextPageIndex);
    });
  };

  return (
    <>
      <BlogHeader posts={posts} />
      <BlogListing posts={posts} />
      <BlogFooter>
        <LoadMoreButton posts={posts} loadMorePosts={loadMorePosts} title="Load Some More Posts" />
      </BlogFooter>
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

const BlogFooter = styled.div`
  width: 100%;
  text-align: center;
  padding: 1em 0;
  > button {
    font-size: 24px;
  }
`;

export default Blog;
