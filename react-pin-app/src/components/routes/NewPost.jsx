import classes from "./NewPost.module.css";
import Modal from "../Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

function NewPost({ onCancelForm, onAddPost }) {
  const [enteredMessage, setEnteredMessage] = useState("");
  const [enteredNickname, setEnteredNickname] = useState("");

  function messageChangeHandler(event) {
    setEnteredMessage(event.target.value);
  }

  function nicknameChangeHandler(event) {
    setEnteredNickname(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      message: enteredMessage,
      author: enteredNickname,
    };
    onAddPost(postData);
    onCancelForm();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="message">Text</label>
          <textarea
            id="message"
            required
            rows={3}
            onChange={messageChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            required
            onChange={nicknameChangeHandler}
          />
        </p>
        <div className={classes.actions}>
          <button type="button">Cancel</button>
          <button>Submit</button>
        </div>
      </form>
    </Modal>
  );
}

export default NewPost;
