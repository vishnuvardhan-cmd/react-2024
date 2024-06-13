import React from "react";

const Post = ({ post }) => {
  return (
    <div>
      <h1 className="heading-sm">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default React.memo(Post);
