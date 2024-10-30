import styles from "./Cast.module.css"
import profile from "../../../assets/profile.png"

export const Cast = ({data}) => {
    const ImgUrl = "https://image.tmdb.org/t/p/original";
    console.log(data)
  return (
    <div  className={styles.cast}>
        <h1>Top Cast</h1>
        <div className={styles.castCarousel}>
            {data?.map((item) => (
                <div className={styles.carouselCard}>
                <div className={styles.cardImg}>
                    <img src={item.profile_path ? ImgUrl+item.profile_path : profile} alt="" />
                </div>
                <div className={styles.castDetails}>
                    <h2>{item.name}</h2>
                    <p>{item.character}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}
