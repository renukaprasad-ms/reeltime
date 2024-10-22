import styles from "./Carousel.module.css";

const Carousel = ({ data }) => {
  const url = "https://image.tmdb.org/t/p/original";
  const poster = "https://movix-eta.vercel.app/assets/no-poster-af8294eb.png";
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        {data?.map((item) => (
          <div className={styles.carouselCard} key={item.id}>
            <div className={styles.cardImage}>
              <img
                src={item.poster_path ? `${url}${item?.poster_path}` : poster}
                alt=""
              />
              <p className={styles.ratingCircle}>
                {item?.vote_average.toFixed(1)}
              </p>
            </div>
            <h3>{item?.original_title || item.original_name}</h3>
            <p>{item?.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
