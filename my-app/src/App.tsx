import React from 'react';



import logo from './logo.svg';
import './App.css';
import { TypeScript } from './TypeScript/Typescript';
import { Candidate } from './TypeScript/Candidate';
import { CandidateList } from './TypeScript/CandidateList';
import { Status } from './TypeScript/Status';
import { Heading } from './TypeScript/Heading';
import { Oscar } from './TypeScript/Oscar';
import { Button } from './TypeScript/ButtonProps';
import { Input } from './TypeScript/Input';
import { Container } from './TypeScript/Container';







function App() {
  const nameList = [
    {
      first: 'sathish',
      last: "Roja"
    },
    {
      first: 'Jagan',
      last: "Mohan"
    }
  ]
  return (
    <div className="App">
      <TypeScript name="sathish"  isloggedin={false} />
       
      <CandidateList names={nameList} />
      <Status status='ds' />
     
      <Oscar>
        <Heading>Oscar goes to</Heading>
      </Oscar>
      <Button handleClick={ (event, id) => {
        console.log("clicked", event, id)
      }}/>
  
      <Input value='' handleChange={(event) => console.log(event)}/>
       
    </div>
  );
}

export default App;

