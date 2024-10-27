import styles from "./Header.module.css";
import logo from "../../../public/logo.png";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuclicked, setMenuClicked] = useState(false);
  const handleMenu = () => {
    setMenuClicked((prevState) => !prevState);
  };
  const navigate = useNavigate();
  return (
    <div className={styles.headerContainer}>
      <div
        className={styles.logoSec}
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} alt="logo" />
        <p>REELTIME</p>
      </div>
      <div className={styles.categorySec}>
        <div className={styles.categoryContainer}>
          <div
            onClick={() => {
              navigate(`/Explore/${"movie"}`);
            }}
          >
            Movie
          </div>
          <div
            onClick={() => {
              navigate(`/Explore/${"tv"}`);
            }}
          >
            TV Shows
          </div>
        </div>
        <div>
          <IoIosSearch size={20} />
        </div>
        <div className={styles.hamburgerMenu}>
          {menuclicked == false ? (
            <RxHamburgerMenu onClick={handleMenu} />
          ) : (
            <RxCross1 onClick={handleMenu} />
          )}
        </div>
      </div>

      <div
        className={menuclicked == true ? styles.popUpMenu : styles.invisible}
      >
        <p
          onClick={() => {
            navigate(`/Explore/${"movie"}`);
            setMenuClicked(false);
          }}
        >
          Movie
        </p>
        <p
          onClick={() => {
            navigate(`/Explore/${"tv"}`);
            setMenuClicked(false);
          }}
        >
          TV Shows
        </p>
      </div>
    </div>
  );
};

export default Header;
