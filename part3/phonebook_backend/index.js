const express = require("express");
const morgan=require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("tiny"));

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122"
  },
];

//morgan(':method :url :status :res[content-length] - :response-time ms').json.stringyfy(`{name},{number}`)
const getID = () =>
  persons.length > 0 ? Math.floor(Math.random() * 7896453127986543) : 0;

app.post("/api/persons", (request, response) => {
  const body = request.body
  if (!body.name) {
    return response.status(400).json({ error: ` Person is missing` });
  }
  const person = {
    id: getID(),
    name: body.name,
    number: body.number,
  };
  const list=persons.map((p)=>p.name);
  if(list.includes(body.name)){
    return response.status(400).json(
        {error:"name must be unique"}
    )
  }
  persons = persons.concat(person);
  response.json(person);
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((p) => p.id != id);

  response.status(204).end();
});

app.get("/info", (request, response) => {
  response.send(
    `<p>Phonebook has info  for ${persons.length} people</p> <p> ${Date()} </p>`
  );
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((p) => p.id === id);
  if (!person) {
    return response.status(404).end();
  }
  response.json(person);
});

const PORT = 3001;
app.listen(PORT);
console.log("hello");
