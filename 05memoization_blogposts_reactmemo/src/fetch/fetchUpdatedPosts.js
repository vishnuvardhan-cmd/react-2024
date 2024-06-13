import React from "react";
import allPosts from "../data/allPosts.json";
import newPosts from "../data/newPosts.json";

const fetchUpdatedPosts = () => {
  const index = Math.round(Math.random() * 2);
  const latestPosts=[...allPosts, newPosts[index]];
  return latestPosts;
};

export default fetchUpdatedPosts;
