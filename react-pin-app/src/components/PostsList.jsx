import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostList({ isPosting, onStopPosting }) {
   const [enteredMessage, setEnteredMessage] = useState('');
   const [enteredNickname, setEnteredNickname] = useState('');

   function messageChangeHandler(event) {
      setEnteredMessage(event.target.value)
   }

   function nicknameChangeHandler(event) {
      setEnteredNickname(event.target.value)
   }

   return (
      <>
         {isPosting ?
            <Modal onCloseModal={onStopPosting}>
               <NewPost
                  onMessageChange={messageChangeHandler}
                  onNicknameChange={nicknameChangeHandler}
               />
            </Modal>
            : null
         }
         <ul className={classes.posts}>
            <Post username={enteredNickname} message={enteredMessage} />
            <Post username="test" message="fssss" />
         </ul>
      </>
   )
}

export default PostList;