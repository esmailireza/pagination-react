import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h3>loading ...</h3>;
  }
  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li className="list-group-item">{post.title}</li>
      ))}
    </ul>
  );
};
export default Posts;
