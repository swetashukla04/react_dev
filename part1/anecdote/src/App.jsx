import { useState } from "react";
const App = () => {
  const anecdote = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];


  const [selected, setSelected] = useState(0);
  const [vote,setvote]=useState(Array(anecdote.length).fill(0));
  console.log(vote);
  const random = () => {
    setSelected( Math.floor(Math.random()*anecdote.length));
    //if( Math.floor(Math.random()*anecdote.length)
  };
  console.log(selected);

  const count=()=>{
    const copy=[...vote]
    copy[selected]++;

    setvote(copy);
  }

  // const maximum=()=>{
  //   const max=Math.max(...vote);
  //   const index = vote.indexOf(max);
  //   return(
  //     index
  //   )
  // }

  return (
    
    <>
    <h1>Anecdote of the day</h1>
      {anecdote[selected]}
      <p> Vote: {vote[selected]}</p>

      <br />
      <button onClick={count}>Vote </button>
      <button onClick={random}>next anecdote</button>
      <h1>Anecdote with most vote</h1>
      
      {anecdote[vote.indexOf(Math.max(...vote))]};
      
    </>
  );
};
export default App;
