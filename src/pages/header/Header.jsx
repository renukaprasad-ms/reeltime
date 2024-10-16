import styles from "./Header.module.css";
import logo from "../../../public/logo.png";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [menuclicked, setMenuClicked] = useState(false);
  const handleMenu = () => {
    setMenuClicked(!menuclicked);
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoSec}>
        <img src={logo} alt="logo" />
        <h1>REELTIME</h1>
      </div>
      <div className={styles.categorySec}>
        <div className={styles.categoryContainer}>
          <div>Movie</div>
          <div>TV Shows</div>
        </div>
        <div>
          <IoIosSearch size={20} />
        </div>
        <div className={styles.hamburgerMenu}>
          {menuclicked == false ? (
            <RxHamburgerMenu size={20} onClick={handleMenu} />
          ) : (
            <RxCross1 size={20} onClick={handleMenu} />
          )}
        </div>
        <div className={menuclicked == true ? styles.popUpMenu : styles.invisible}>
          <p>Movie</p>
          <p>TV Shows</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
