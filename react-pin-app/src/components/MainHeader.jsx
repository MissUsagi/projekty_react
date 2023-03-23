import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';

function MainHeader({ onCreatePost }) {

   return (
      <header className={classes.header}>
         <h1 className={classes.logo}>
            <MdMessage />
            React Pin App
         </h1>
         <div>
            <button className={classes.button} onClick={onCreatePost}>
               <MdPostAdd size={18} />
               New Post
            </button>
         </div>
      </header>
   );
}

export default MainHeader;