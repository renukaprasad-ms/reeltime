import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const MainUrl = "https://api.themoviedb.org/3";
  const Key = "99497792facc75d84ebfb64aa2cfc737";

  const fetchData = (endpoint) => {
    fetch(`${MainUrl}${endpoint}?api_key=${Key}`)
    .then(res => res.json())
    .then(resData => (setData(resData)))
    .catch(err => console.log(err))
  };

  useEffect(() => {
    fetchData(url)
  }, [url]); 
  return data;
};

export default UseFetch;
