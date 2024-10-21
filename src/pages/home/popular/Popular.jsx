import { useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import styles from "./Popular.module.css";
import UseFetch from "../../../hook/UseFetch";

const Popular = () => {
  const [mediaType, setMediaType] = useState("movie");
  const data = UseFetch(`/${mediaType}/popular`);
  return (
    <div className={styles.popularContainer}>
      <div className={styles.popularHeader}>
        <h2>What's Popular</h2>
        <div className={styles.timeWindow}>
          <p
            className={mediaType == "movie" ? styles.selected : ""}
            onClick={() => {
              setMediaType("movie");
            }}
          >
            Movie
          </p>
          <p
            className={mediaType == "tv" ? styles.selected : ""}
            onClick={() => {
              setMediaType("tv");
            }}
          >
            TV Shows
          </p>
        </div>
      </div>
      <div className={styles.popularBody}>
        <Carousel data={data?.results} />
      </div>
    </div>
  );
};

export default Popular;
