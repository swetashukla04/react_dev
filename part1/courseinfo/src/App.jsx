const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};
const Part = (props) => {
  return (
    <>
    <p>
        {props.first} {props.second}
      </p>
    </>
  )

};
const Content = (props) => {
  return (
    <>
    <Part first={props.part[0] } second ={props.exercises[0]} />
    <Part first={props.part[1] } second ={props.exercises[1]} />
    <Part first={props.part[2] } second ={props.exercises[2]} />
    </>
  );
};


const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises are{" "}
        {props.texercise[0] + props.texercise[1] + props.texercise[2]}
      </p>
    </>
  );
};



const App = () => {
  const course = "Half stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header course={course} />

      <Content part={[part1,part2,part3]} exercises={[exercises1,exercises2,exercises3]} />

      <Total texercise={[exercises1, exercises2, exercises3]} />
    </>
  );
};
export default App;
