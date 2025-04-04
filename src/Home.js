//import { Link } from "react-router-dom";
//import useBPADetails from "./useBPADetails";
//import useMyBPAs from "./useMyBPAs";
import useFetch from "./useFetch";
import BPAlist from "./BPAlist";
import App from "./App";

const Home = () => {
  const title = "My BPAs!";
  const url = "http://localhost:8000/member";
  const id = "BPA176D7801F090067ED3DF80000028F"; // Assuming you want to fetch details for BPA with id 1
  const { data, isLoading, error } = useFetch(url);
  console.log("I am here...", data, isLoading, error);
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Is Loading...</div>}
      {data && <BPAlist bpas={data} title={title} />}
    </div>
  );
};
export default Home;
