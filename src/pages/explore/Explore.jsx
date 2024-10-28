import { useEffect, useState } from "react";
import styles from "./Explore.module.css";
import { useNavigate, useParams } from "react-router";
import poster from "../../assets/Poster.png";

const Explore = () => {
  const [data, setData] = useState();
  const [pageNo, setPageNo] = useState(1);
  const [genres, setGenres] = useState([]);
  const { mediatype } = useParams();
  const [genresId, setGenresId] = useState("");
  const Api_Key = "99497792facc75d84ebfb64aa2cfc737";
  const [sortOpt, setSortOpt] = useState("popularity.desc");
  const imgUrl = "https://image.tmdb.org/t/p/original";
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const Mian_Url = `https://api.themoviedb.org/3/discover/${mediatype}?api_key=${Api_Key}&language=en-US&sort_by=${sortOpt}&include_adult=false&include_video=false&page=${pageNo}&with_genres=${genresId}`

  const getGenre = () => {
    fetch(
      `https://api.themoviedb.org/3/genre/${mediatype}/list?api_key=${Api_Key}&language=en-US`
    )
      .then((res) => res.json())
      .then((gen) => {
        setGenres(gen.genres);
        if (mediatype === "movie") {
          setGenresId("28");
        } else {
          setGenresId("10759");
        }
      });
  };
  const fetchData = () => {
    fetch(Mian_Url)
      .then((res) => res.json())
      .then((data) => {
        console.log("fetched url  " + Mian_Url)
        setData(data);
      })
      .catch((err) => console.log(err));
  };
  const fetchNextData = (event) => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.documentElement.scrollHeight
    ) {
      setPageNo((prev) => {
        const newPageNo = prev + 1;
        fetch(`https://api.themoviedb.org/3/discover/${mediatype}?api_key=${Api_Key}&language=en-US&sort_by=${sortOpt}&include_adult=false&include_video=false&page=${newPageNo}&with_genres=${genresId}`)
          .then((res) => res.json())
          .then((data) => {
            if (data?.results) {
              setData((prev) => ({ ...prev, results: [...(prev.results || []), ...data.results] }));
            }
          })
          .catch((err) => console.log(err));
        return newPageNo; 
      });
    }
  };
  const handleGenerSelect = (event) => {
    setGenresId(event.target.value);
    setPageNo(1);
  };
  const handleSortSelect = (event) => {
    setSortOpt(event.target.value);
    setPageNo(1);
  };
  const handleCard = (id, name) => {
    if (name) {
      navigate(`/Details/tv/${id}`);
    } else {
      navigate(`/Details/movie/${id}`);
    }
  };
  useEffect(() => {
    mediatype == "movie" ? setGenresId("28") : setGenresId("10759");
  }, [mediatype]);
  useEffect(() => {
    getGenre();
  }, [mediatype]);
  useEffect(() => {
      if(genresId) {
        fetchData()
      }
  }, [ genresId, sortOpt]);
  useEffect(() => {
    window.addEventListener("scroll", fetchNextData);
  }, []);
  return (
    <div className={styles.exploreContainer}>
      <div className={styles.exploreHeader}>
        <h2>Explore {mediatype == "movie" ? "Movie" : "TV Shows"}</h2>
        <div className={styles.select}>
          <select name="" id="" onChange={handleGenerSelect}>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre?.name}
              </option>
            ))}
          </select>
          <select name="" id="" onChange={handleSortSelect}>
            <option value="popularity.desc">
              Sort by Popularity (Descending)
            </option>
            <option value="popularity.asc">
              Sort by Popularity (Ascending)
            </option>
            <option value="release_date.desc">
              Sort by Release Date (Newest First)
            </option>
            <option value="release_date.asc">
              Sort by Release Date (Oldest First)
            </option>
            <option value="rating.desc">Sort by Rating (Highest First)</option>
            <option value="rating.asc">Sort by Rating (Lowest First)</option>
          </select>
        </div>
      </div>
      <hr />
      <div className={styles.exploreBody}>
        {data?.results.length > 0 ? (
          data?.results.map((item,index) => (
            <div
            key={`${item.id}-${pageNo}-${index}`}
              className={styles.card}
              onClick={() => {
                handleCard(item.id, item.original_name);
              }}
            >
              <div className={styles.cardImg}>
                <img
                  src={
                    (item.poster_path && imgUrl + item?.poster_path) ||
                    (item.backdrop_path && imgUrl + item?.backdrop_path) ||
                    poster
                  }
                  alt="poster"
                />
              </div>
              <div className={styles.cardDetails}>
                <p>{item.original_name || item.original_title}</p>
                <p>{item.first_air_date || item.release_date}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Select Different genre</p>
        )}
      </div>
    </div>
  );
};

export default Explore;
