import { Link } from "react-router-dom";
import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Pin App
      </h1>
      <div>
        <Link to="/new-post" className={classes.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </div>
    </header>
  );
}

export default MainHeader;
