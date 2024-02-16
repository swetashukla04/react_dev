import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [value, setvalue] = useState("");
  const [rates, setRates] = useState({});
  const [currency, setCurrency] = useState(null);

  useEffect(() => {
    console.log("effect run,currency is now", currency);

    if (currency) {
      console.log("fetching exchanging reates...");
      axios
        .get(`https://open.er-api.com/v6/latest/${currency}`)
        .then((response) => {
          setRates(response.data.rates);
        });
    }
  }, [currency]);
  const handlechange =(event)=>{
    setvalue(event.target.value)
  }
  const onSearch=(event)=>{
     event.preventDefault();
     setCurrency(value);

  }
  console.log(rates)
  return (
    <>
    <form  onSubmit={onSearch}>
      currency:<input value={value} onChange={handlechange}/>
      <button type="submit"> exchange Rate</button>
    </form>
    <pre>
      {
        JSON.stringify(rates,null,2)
      }
    </pre>
    </>
  )
};
export default App;
