import styles from "./Home.module.css"
import Hero from "./hero/Hero"

const Home = () => {
  return (
    <div className={styles.HeroContainer}>
            <Hero/>
    </div>
  )
}

export default Home