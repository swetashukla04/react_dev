const Header = ({ name }) => <h1>{name}</h1>;

// const Total = ({ exercises }) => {
//   const total = exercises.reduce((sum, exe) => sum + exe, 0);
//   return(
//   <p>Number of exercises {total}</p>
//   )
// };
const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises {total}</p>;
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {/* <Part
      part={parts[0]} 
    />
    <Part
      part={parts[1]} 
    />
    <Part
      part={parts[2]} 
    />       */}

    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);
const Courses = ({courses}) => {
  console.log(courses)
  return (
    <>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />

      <Content parts={course.parts} />

      {/* <Total exercises={course.parts.map((part) => part.exercises)} /> */}
      <Total parts={course.parts} />
    </>
  );
};

export default Courses
