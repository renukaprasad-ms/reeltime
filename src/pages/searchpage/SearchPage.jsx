import { useParams } from "react-router";
import styles from "./SearchPage.module.css";
import { useEffect, useState } from "react";

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
      {data?.results?.map((item) => (
        <div className={styles.card}>
          <img src={imgUrl + item.poster_path} alt="" />
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
