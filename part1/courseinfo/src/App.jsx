const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
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
  );
};

const Content = (props) => {
  return (
    <>
      <Part first={props.course.parts[0].name} second={props.course.parts[0].exercises} />
      <Part first={props.course.parts[1].name} second={props.course.parts[1].exercises} />
      <Part first={props.course.parts[2].name} second={props.course.parts[2].exercises} />
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises are{" "}
        {props.texercise.parts[0].exercises + props.texercise.parts[1].exercises + props.texercise.parts[2].exercises}
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name:'Half Stack application development',
 parts : [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ]}

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total texercise={course} />
    </>
  );
};

export default App;
