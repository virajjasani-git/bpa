import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const BPAlist = ({ bpas, title }) => {
  return (
    <div className="BPA-list">
      <h2>{title}</h2>
      {bpas.map((bpa) => (
        <div className="bpa-preview" key={bpa.id}>
          <Link to={`/bpa/${bpa.id}`}>
            <h2>{bpa.bpanumber}</h2>
            <p>{bpa.rev}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BPAlist;
