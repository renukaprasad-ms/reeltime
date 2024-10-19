import styles from "./Home.module.css";
import Hero from "./hero/Hero";
import Trending from "./trending/Trending";

const Home = () => {
  return (
    <div className={styles.HeroContainer}>
      <Hero />
      <Trending/>
    </div>
  );
};

export default Home;
