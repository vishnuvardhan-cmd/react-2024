import React, { useEffect, useState } from "react";
import allPosts from "../data/allPosts.json";
import fetchUpdatedPosts from "../fetch/fetchUpdatedPosts";
import LatestPost from "./LatestPost";
import sortPosts from "../utility/sortPosts";
import UserPostsIndex from "./UserPostsIndex";

function Blog({ signedIn }) {
  const [localtime, setLocalTime] = useState(0);
  const [posts, setPosts] = useState(allPosts);

  useEffect(() => {
    const id = setInterval(
      () => setLocalTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(id);
  }, []);

  const handleGetLatestPost = () => {
    const updatedPosts = fetchUpdatedPosts();
    setPosts(updatedPosts);
  };

  const sortedPosts = sortPosts(posts);

  return (
    <div className="container">
      <h1 className="heading-lg m-1 p-1">Memoization in React</h1>
      <div className="my-1 p-2 box">
        <div className="latest-posts-top">
          <h1 className="my-1 p-1 heading-md">Latest Posts</h1>
          <p className="my-1 p-1">{localtime}</p>
        </div>
        <button
          className="my-1 p-2 btn btn-primary"
          onClick={handleGetLatestPost}
        >
          Get Latest Post
        </button>
        <hr className="my-2" />
        <div className="border border-rounded my-2 p-2">
          <LatestPost post={sortedPosts[0]} />
        </div>
      </div>
      <UserPostsIndex signedIn={signedIn} />
    </div>
  );
}

export default Blog;
