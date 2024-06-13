import React from "react";

const UserPost = ({ userpost }) => {
  return (
    <div className="my-1 flex-row-left">
      <a href={`#${userpost.title}`}>
        <h4 className="px-2 font-sm font-bold">{userpost.title}</h4>
      </a>
    </div>
  );
};

export default UserPost;
