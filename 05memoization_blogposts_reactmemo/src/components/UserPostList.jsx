import React from "react";
import UserPost from "./UserPost";

const UserPostList = ({ userPosts, deletePost }) => {
  return (
    <div>
      {userPosts.map((userpost) => (
        <div key={userpost.id} className="my-1 box flex-row">
          <UserPost userpost={userpost} />
          <button className="btn btn-danger m-1 p-1" data-post-id={userpost.id} onClick={deletePost}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserPostList;
