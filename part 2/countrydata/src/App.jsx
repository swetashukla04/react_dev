import { useEffect, useState } from "react";
import axios from "axios";

const Content = ({ show, detail }) => {
  if (show.length > 10) {
    return <p>Too many match,specify another filter</p>;
  }
  if (show.length > 1) {
    return <pre>{JSON.stringify(show, null, 2)}</pre>;
  }
  if (show.length == 1) {
    
    return (
      <>
        <h1>{detail.name}</h1>
        Capital:
        <span>
          {detail.capital.map((c) => {
            return <span key={c}>{c}</span>;
          })}
        </span>
        <br/>
        Area:
        <span>
          {detail.area}
        </span>

        <h3>languages</h3>
        <ul>
          {Object.values(detail.languages).map((l)=>{
            return <li key={l}>{l}</li>
          })}
        </ul>

        <img src={detail.flag.png} alt="flag of the country" />

        <h2>Weather in</h2>

      </>
    );
  }
};

const App = () => {
  const [value, setValue] = useState("");
  const [country, setCountry] = useState([]);
  const [show, setShow] = useState([]);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const L = country.filter(
      (c) => c.toLowerCase().match(value.toLowerCase()) !== null
    );
    if (value !== "") {
      setShow(L);
    }
    if (L.length == 1) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${L[0]}`)
        .then((Response) => {
          //  console.log(Response.data)
          const temp = {};
          temp["name"] = Response.data.name.common;
          temp["capital"] = Response.data.capital;
          temp["area"] = Response.data.area;
          temp["languages"] = Response.data.languages;
          temp["flag"] = Response.data.flags;
          setDetail(temp);
          console.log(temp)
        });
    }
  }, [value]);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((Response) => {
        const countryname = Response.data.map((c) => c.name.common);
        setCountry(countryname);
      });
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <form>
        Find Country:
        <input value={value} onChange={handleChange} />
      </form>
      <Content show={show} detail={detail} />
    </>
  );
};
export default App;
