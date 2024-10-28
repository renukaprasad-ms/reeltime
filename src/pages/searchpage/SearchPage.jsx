import { useParams } from "react-router";
import styles from "./SearchPage.module.css";
import { useEffect, useState } from "react";
import poster from "../../assets/poster.png";

const SearchPage = () => {
  const { query } = useParams();
  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState();
  const API_KEY = "99497792facc75d84ebfb64aa2cfc737";
  const imgUrl = "https://image.tmdb.org/t/p/original";
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}&page=${pageNum}`;
  console.log("Fetching data from:", url);

  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    setPageNum(1);
    setData([]);
    fetchData();
  }, [query]);
  console.log(data);
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchHeader}>
        {data?.results?.length < 1 ? (
          <h2>No Results Found For : {query}</h2>
        ) : (
          <h2>Showing Results For : {query}</h2>
        )}
      </div>
      <hr />
      <div className={styles.serchBody}>
        {data?.results?.map((item) => (
          <div className={styles.searchCard} key={item.id}>
            <div className={styles.searchCardImg}>
              <img
                src={item.poster_path ? imgUrl + item.poster_path : poster}
                alt=""
              />
            </div>
            <div className={styles.cardDetails}>
              <h3>{item.original_title || item.original_name}</h3>
              <p>{item.release_date || item.first_air_date }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
