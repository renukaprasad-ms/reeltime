import styles from "./Home.module.css";
import Hero from "./hero/Hero";
import Popular from "./popular/Popular";
import TopRated from "./toprated/TopRated";
import Trending from "./trending/Trending";

const Home = () => {
  return (
    <div className={styles.HeroContainer}>
      <Hero />
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  );
};

export default Home;
