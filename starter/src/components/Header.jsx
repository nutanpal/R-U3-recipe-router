import React from "react";
import styles from "./Header.module.css";
import {Link} from "react-router-dom";
//import { BiSearchAlt2 } from "react-icons/bi";

const Header = () => {
  return (
    <header>
      <h2>Newton's Recipe Collection</h2>
      <nav>
        <Link to = "">
          <button className={styles.nav_btn}>Home</button>
        </Link>
        <Link to="/newRecipe"> 
          <button className={styles.nav_btn}> Add Recipe</button>
          </Link>
      </nav>
    </header>
  );
};

export default Header;
