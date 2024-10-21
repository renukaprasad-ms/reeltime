import { useState } from "react";
import styles from "./TopRated.module.css"
import UseFetch from "../../../hook/UseFetch";
import Carousel from "../../../components/carousel/Carousel";

const TopRated = () => {
    const [mediaType, setMediaType] = useState("movie");
    const data = UseFetch(`/${mediaType}/top_rated`);
    return (
      <div className={styles.topratedContainer}>
        <div className={styles.topratedHeader}>
          <h2>Top Rated</h2>
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
        <div className={styles.topratedBody}>
          <Carousel data={data?.results} />
        </div>
      </div>
    );
}

export default TopRated