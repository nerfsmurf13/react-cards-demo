import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Just... Cards...</div>
      <nav>
        <ul className={classes.ul}>
          <li>
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/new" className={classes.link}>
              New
            </Link>
          </li>
          <li>
            <Link to="/favs" className={classes.link}>
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navigation;
