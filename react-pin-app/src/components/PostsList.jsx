import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';

function PostList() {
   return (
      <>
         <NewPost />
         <ul className={classes.posts}>
            <Post username="hej" message="fhfh" />
            <Post username="test" message="fssss" />
         </ul>
      </>
   )
}

export default PostList;