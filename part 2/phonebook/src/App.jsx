import { useState, useEffect } from "react";
import Filter from "./componets/filter";
import Person from "./componets/person";
import PersonForm from "./componets/personform";
import axios from "axios";

import personServices from "./services/detail";

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }
  return <p className="notify">{message}</p>;
};

const Danger = ({ message }) => {
  if (message === null) {
    return null;
  }
  return <p className="error">{message}</p>;
};


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newphone, setNewPhone] = useState("");
  const [search, setsearch] = useState("");
  const [errormessage, setErrormessage] = useState(null);
  const [err,seterr]=useState(null);

  const hook = () => {
    personServices.getAll().then((research) => {
      setPersons(research);
    });
  };
  useEffect(hook, []);

  const addPerson = (event) => {
    event.preventDefault();
    const newPersonname = {
      name: newName,
      number: newphone,
    };

    const pList = persons.map((p) => p.name);

    if (pList.includes(newName)) {
      const temp = persons.filter((p) => p.name === newName);
      const p = { ...temp[0], number: newphone };
      if (
        confirm(
          `${newName} is alreay added to phonebook, replace the old number with a new one`
        )
      ) {
        setErrormessage(`${newPersonname.name} is updated`);
        setTimeout(() => {
          setErrormessage(null);
        }, 5000);
        personServices.change(p.id, p).then((result) => {
          const m = persons.map((person) =>
            person.id === result.id ? result : person
          );
          setPersons(m);
        });
      }
    } else {
      setErrormessage(`${newPersonname.name} is added`);
      setTimeout(() => {
        setErrormessage(null);
      }, 10000);
      personServices.create(newPersonname).then((returnperson) => {
        setPersons(persons.concat(returnperson));
      });
    }
    setNewName("");
    setNewPhone("");
  };

  const personeventhandler = (event) => {
    setNewName(event.target.value);
  };
  const phoneeventhandler = (event) => {
    setNewPhone(event.target.value);
  };
  const searcheventhandler = (event) => {
    setsearch(event.target.value);
  };
  const deletehandler = (id, name) => {
    confirm(`Delete   ${name}`)
      ? personServices.remove(id).then((result) => {
          const temp = persons.filter((person) => person.id !== result.id);
          setPersons(temp);
        })
        .catch( error=>{
            seterr(`Information of ${name} has been removed from server`)
            setTimeout(() => {
              seterr(null);
            }, 500);
        })
      : console.log("bhad m jao yarr");
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Notification message={errormessage} />
      <Danger message={err}/>
      <Filter search={search} searcheventhandler={searcheventhandler} />
      <h3>Add a new </h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        personeventhandler={personeventhandler}
        newphone={newphone}
        phoneeventhandler={phoneeventhandler}
      />
      <h3>Numbers</h3>

      <Person search={search} persons={persons} deletehandler={deletehandler} />
    </>
  );
};

export default App;
