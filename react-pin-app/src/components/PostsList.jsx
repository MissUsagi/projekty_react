import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostsList.module.css";
import { useState } from "react";

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]); //nowy post jako 1szy
  }
  return (
    <>
      {isPosting ? (
        <Modal onCloseModal={onStopPosting}>
          <NewPost onCancelForm={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      ) : null}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.message}
              username={post.author}
              message={post.message}
            /> //change key to unique id
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
