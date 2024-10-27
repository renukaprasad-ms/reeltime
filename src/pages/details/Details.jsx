import { useParams } from "react-router"
import styles from "./Details.module.css"
import UseFetch from "../../hook/UseFetch";

const Details = () => {
  const {mediatype,id} = useParams();
  const data = UseFetch(`/${mediatype}/${id}`)
  const castData = UseFetch(`/${mediatype}/${id}/credits`)
  const videoData = UseFetch(`/${mediatype}/${id}/videos`)
  console.log(videoData)
  return (
    <div>Details</div>
  )
}

export default Details