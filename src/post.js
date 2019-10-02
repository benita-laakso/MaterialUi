import React from "react";
import "./post.css";

const Post = ({ match, data }) => {
  let post = data.find(p => p.id == match.params.postId);

  return (
    <div className="postdiv">
      <img
        className="postimage"
        src={post.image}
        alt={post.text}
        height="200"
      />
      <p>{post.text}</p>
      <p>{post.moretext}</p>

    </div>
  );
};

export default Post;
