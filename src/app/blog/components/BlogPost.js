import React from 'react';
import styled from "styled-components";

const BlogPost = (props) => {
    const { post } = props;
    if (!post) { return null; }
    console.log(post);
    return (<PostWrapper>
        <img src={post.images.cover} alt="some alt" />
        <PostContent>
            <span>{post.date}</span>
            <h3>{post.title}</h3>
            <div style={{marginTop: 'auto', fontSize: '10pt'}}>{post.author}</div>
        </PostContent>
    </PostWrapper>)
}

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

export default BlogPost;