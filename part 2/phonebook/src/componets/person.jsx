const Person = (props) => {
  return (
    <>
      {props.search === ""
        ? props.persons.map((person) => (
            <p key={person.name}>
              {person.name} {person.number} <button onClick={()=>props.deletehandler(person.id,person.name)}>delete</button>
            </p>
          ))
        : props.persons
            .filter((person) =>
              person.name.toLowerCase().includes(props.search.toLowerCase())
            )
            .map((person) => (
              <p key={person.name}>
                {person.name} {person.number}  <button onClick={()=>props.deletehandler(person.id)}>delete</button>
              </p>
            ))}
    </>
  );
};

export default Person;
