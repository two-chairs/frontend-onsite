import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { blogState } from "../state/blogSlice";
import { apiUrl } from "../../../_constants/globals";

const BlogPost = (props) => {
  const { post } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `${apiUrl}/data/frontend-challenge/getCommentsBulk?postIds=${post.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        const thisPostsComments = data[post.id];
        dispatch(blogState.actions.loadComments(thisPostsComments));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const comments = useSelector((state) => state.blog.comments);
  const thisPostsComments = comments.filter(
    (comment) => comment.postId === post.id
  );



  return (
    <PostWrapper>
      <img src={post.images.cover} alt="some alt" />
      <PostContent>
        <span>{post.date}</span>
        <h3>{post.title}</h3>
        <div style={{ marginTop: "auto", fontSize: "10pt" }}>{post.author}</div>
      </PostContent>
      <PostFooter>
        {thisPostsComments.length > 0 && <span>Comments: {thisPostsComments.length}</span>}
      </PostFooter>
    </PostWrapper>
  );
};

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  > img {
    width: 100%;
    max-height: 300px;
  }
`;
const PostContent = styled.div`
  padding: 8px 16px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;
const PostFooter = styled.div`
  padding: 0 16px;
  font-size: 10pt;
  color: #2e2e2e;
`;

export default BlogPost;
