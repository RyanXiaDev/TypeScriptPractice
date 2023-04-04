import React from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { LoggedIn } from "./components/state/LoggedIn";

function App() {
  const personName = {
    first: "Ryan",
    last: "X",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "lee",
    },
    {
      first: "Jacky",
      last: "Chen",
    },
    {
      first: "Keanu",
      last: "Reeves",
    },
  ];

  return (
    <div className="App">
      <Greet name="Ryan" isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Button
        handleClick={(event,id) => {
          console.log("button clicked",event,id);
        }}
      />
      <Input value='' handleChange={(event)=> console.log(event)} />
      <Container styles={{border:'1px solid black',padding: '1rem'}} />
      <LoggedIn />
    </div>
  );
}

export default App;
