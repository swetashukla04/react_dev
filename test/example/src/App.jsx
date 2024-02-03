// import { useState } from "react";
// const App = () => {
//   const [left, setleft] = useState(0);
//   const [right, setright] = useState(0);

//   const handleLeftClick = ()=>{
//     setleft(left+1);
//     setright(right+1);

//   }

//   return (
//     <>
//       {left}
//       <button onClick={()=>setleft(left + 1)}>left</button>
//       {right}
//       <button onClick={() => setright(right + 1)}>right</button>

//       <button onClick={handleLeftClick}>both</button>

//     </>
//   );
// };

// // const App = () => {
// //   const [clicks, setClicks] = useState({
// //     left: 0, right: 0
// //   })

// //   const handleLeftClick = () => {
// //     // const newClicks = {
// //     //   // ...clicks,
// //     //   // left: clicks.left + 1,
// //     //   // right: clicks.right
// //     // }
// //     clicks.left++;
// //     setClicks(clicks)
// //   }

// //   const handleRightClick = () => {
// //     // const newClicks = {
// //     //   // left: clicks.left,
// //     //   ...clicks,
// //     //   right: clicks.right + 1
// //     // }
// //     clicks.right++;
// //     setClicks(clicks)
// //   }

// //   return (
// //     <>
// //       {clicks.left}
// //       <button onClick={handleLeftClick}>left</button>
// //       <button onClick={handleRightClick}>right</button>
// //       {clicks.right}
// //     </>
// //   )
// // }

// // const History = (props) => {
// //   if (props.allclicks.length === 0) return;
// //   <div>the app is operated using buttons</div>;
// //   return <div>button press history:{props.allclicks.join(" ")}</div>;
// // };

// // const App = () => {
// //   const [left, setleft] = useState(0);
// //   const [right, setright] = useState(0);
// //   const [allclicks, setall] = useState([]);
// //   const [total, setTotal] = useState([]);

// //   const handleLeftClick = () => {
// //     setall(allclicks.concat("L"));
// //     setleft(left + 1);
// //     setTotal(left + right);
// //   };
// //   const handleRightClick = () => {
// //     setall(allclicks.concat("R"));
// //     setright(right + 1);
// //     setTotal(left + right);
// //   };

// //   return (
// //     <>
// //       {left}
// //       <button onClick={handleLeftClick}>left</button>
// //       <button onClick={handleRightClick}>right</button>
// //       {right}
// //       {/* <p>{allclicks.join(" ")}</p> */}
// //       <p>total {total+1}</p>
// //       <History allclicks={allclicks}/>
// //     </>
// //   );
// // };
// export default App;

import { useState } from "react";

// const App = () => {
//   const [value, setvalue] = useState(10);
//   return (
//     <>
//       {value}
//       <button onClick={() => console.log("click the button")}>button</button>
//       {/* <button onClick={setvalue(0)}>button</button> */}
//     </>
//   );
// };

// const App = () => {
//   const [value, setValue] = useState(10)

//   const hello = (who) => {
//     const handler = () => {
//       console.log('hello', who)
//     }
//     return handler
//   }

//   return (
//     <div>
//       {value}
//       <button onClick={hello('world')}>button</button>
//       <button onClick={hello('react')}>button</button>
//       <button onClick={hello('function')}>button</button>
//     </div>
//   )
// }
// const App = () => {
//   const [value, setValue] = useState(10)
  

//   const setToValue = (newValue) => () => {
//     console.log('value now', newValue)  // print the new value to console
//     setValue(newValue)
//   }
  
//   return (
//     <div>
//       {value}

//       <button onClick={setToValue(1000)}>thousand</button>
//       <button onClick={setToValue(0)}>reset</button>
//       <button onClick={setToValue(value + 1)}>increment</button>
//     </div>
//   )
// }
// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>

//       <Display counter={counter}/>
//       <button onClick={increaseByOne}>
//         plus
//       </button>
//       <button onClick={setToZero}> 
//         zero
//       </button>
//     </div>
//   )
// }
// 

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
);

const Display = ({ counter }) => (
  <p>Counter: {counter}</p>
);

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />

      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />
      <Button
        onClick={decreaseByOne}
        text='minus'
      />
    </div>
  );
};

export default App;


