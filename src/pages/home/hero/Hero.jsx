import styles from "./Hero.module.css";
import UseFetch from "../../../hook/UseFetch";
import { useState } from "react";

const Hero = () => {
  const data = UseFetch("/movie/popular");
  const img_URL = "https://image.tmdb.org/t/p/w500";
  const img =
    img_URL + data?.results[Math.floor(Math.random() * 20)].backdrop_path;
  console.log(data?.results[Math.floor(Math.random() * 20)].backdrop_path);
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroBanner}>
        <img src={img} alt="img" />
      </div>
      <div className={styles.heromsg}>
        <h1>Welcome.</h1>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        <div className={styles.heroInput}>
          <input type="text" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
