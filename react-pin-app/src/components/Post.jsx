import classes from './Post.module.css'

function Post(props) {
   return (
      <li className={classes.post}>
         <p className={classes.author}>{props.username}</p>
         <p className={classes.text}>{props.message}</p>
      </li>
   )
}

export default Post; 