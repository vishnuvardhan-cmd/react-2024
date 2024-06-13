import React, { useEffect, useState } from "react";
import fetchUserPosts from "../fetch/fetchUserPosts";
import UserPostList from "./UserPostList";

const UserPostsIndex = ({ signedIn }) => {
  const [userPosts, setUserPosts] = useState([]);

  const deletePost = (e) => {
    const { postId } = e.currentTarget.dataset;
    const updatedPosts = userPosts.filter(
      (post) => post.id !== parseInt(postId)
    );
    setUserPosts(updatedPosts);
  };

  useEffect(() => {
    const posts = fetchUserPosts();
    setUserPosts(posts);
  }, []);
  return (
    <div className="my-2 p-2 box">
      <div className="m-1 py-1">
        <h1 className="heading-md">Your posts</h1>
        <p className="m-1 p-1">{signedIn ? `Signed In` : `Signed Out`}</p>
        {userPosts && (
          <div>
            {<UserPostList userPosts={userPosts} deletePost={deletePost} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(UserPostsIndex);
