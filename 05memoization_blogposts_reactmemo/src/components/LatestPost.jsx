import React, { useEffect, useState } from "react";
import Post from "./Post";

const LatestPost = ({ post }) => {
  const [likes, setLikes] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setLikes((prev) => prev + 1), 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      {post ? (
        <div className="p-1">
          <Post post={post} />
          <p className="my-2 py-1">{likes} Likes</p>
        </div>
      ) : (
        <p>Click on Get Latest Button</p>
      )}
    </div>
  );
};

export default LatestPost;
