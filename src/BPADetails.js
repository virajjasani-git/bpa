import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BPADetails = () => {
  const { id } = useParams();
  console.log("id...", id);
  const title = "BPA Details!";
  const { data, isLoading, error } = useFetch("http://localhost:8000/member/" + id);

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isLoading && <div>Is Loading...</div>}
      {data && (
        <article>
          <h2>{data.bpanumber}</h2>
          <p>{JSON.stringify(data)}</p>
        </article>
      )}
    </div>
  );
};

export default BPADetails;
