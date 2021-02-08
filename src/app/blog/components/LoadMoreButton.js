import React from "react";

const LoadMoreButton = ({ loadMorePosts }) => {  
  return (    
      <button onClick={loadMorePosts}>Load More</button>
  );
};

export default LoadMoreButton;
