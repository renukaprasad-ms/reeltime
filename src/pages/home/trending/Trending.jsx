import { useState } from "react";
import styles from "./Trending.module.css";
import Carousel from "../../../components/carousel/Carousel";
import UseFetch from "../../../hook/UseFetch";

const Trending = () => {
  const [timeWindow, setTimeWindow] = useState("day");
  const data = UseFetch(`/trending/movie/${timeWindow}`);
  return (
    <div className={styles.trendingContainer}>
      <div className={styles.trendingHeader}>
        <h2>Now Playing</h2>
        <div className={styles.timePeroid}>
          <p
            className={timeWindow == "day" ? styles.selected : ""}
            onClick={() => {
              setTimeWindow("day");
            }}
          >
            Day
          </p>
          <p
            className={timeWindow == "week" ? styles.selected : ""}
            onClick={() => {
              setTimeWindow("week");
            }}
          >
            Week
          </p>
        </div>
      </div>
      <div className={styles.trendingBody}>
        <Carousel data = {data?.results}/>
      </div>
    </div>
  );
};

export default Trending;
