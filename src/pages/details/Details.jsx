import { useParams } from "react-router";
import styles from "./Details.module.css";
import UseFetch from "../../hook/UseFetch";
import { PiPlayCircleThin } from "react-icons/pi";
import { Cast } from "./cast/Cast";

const Details = () => {
  const { mediatype, id } = useParams();
  const ImgUrl = "https://image.tmdb.org/t/p/original";
  const data = UseFetch(`/${mediatype}/${id}`);
  const castData = UseFetch(`/${mediatype}/${id}/credits`);
  const videoData = UseFetch(`/${mediatype}/${id}/videos`);
  console.log(data);
  return (
    <div className={styles.details}>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsCard}>
          <div className={styles.detailsCardImg}>
            <img src={ImgUrl + data?.poster_path} alt="" />
          </div>
          <div className={styles.detailsCardDetails}>
            <h1>{data?.original_title || data?.original_name}</h1>
            <h4>{data?.tagline}</h4>
            <div className={styles.genres}>
              {data?.genres.map((item) => (
                <p key={item.id}>{item.name}</p>
              ))}
            </div>
            <div className={styles.ratingDiv}>
              <div className={styles.ratingCircle}><h2>{data?.vote_average.toFixed(1)}</h2></div>
              <div className={styles.videoBtn}>
                <PiPlayCircleThin  className={styles.palyIcon}/>
                <h2>Watch Trailor</h2>
              </div>
            </div>
            <div className={styles.overview}>
              <h2>Overview</h2>
              <p>{data?.overview}</p>
            </div>
            <div className={styles.status}>
              <h3>Status: <span>{data?.status}</span></h3>
            </div>
            <hr />
            <div className={styles.status}>
            <h3>Release Date: <span>{data?.release_date}</span></h3>
            </div>
            <hr />
            <div className={styles.status}>
            <h3>Runtime: <span>{data?.runtime}</span></h3>
            </div>
            <hr />
          </div>
        </div>
        <div>
          <Cast data = {castData?.cast} />
        </div>
      </div>
    </div>
  );
};

export default Details;
