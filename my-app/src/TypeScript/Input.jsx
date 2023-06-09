
import { useState } from "react"

type InputProps  ={
    value: String,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {

    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        
    }
    return <input type="text" value={props.value} onChange = {handleInputChange}/>
}
/*

/**
  let name : any; // type any means number string boolean
  let age: number | string;  union we have to either number or string
  let isStudent: boolean;
  let hobbies: string[]; 
  let role: [number, string] it should be either number or string is "Tuple"

  recommended to give each and every variable data type do not give any

  if you don't know what type it would be then give unknown
  let personName: unknown
 */
 //role = [5, "sdsf"]

  //let printName: (name: string) => number;

  //let personName: unknown //if you don't have what type it is mention unknown

  //interface Person {
   // name:string;
   // age?:number // optional property
 // }
 /** 
  type Y = X & {
    c:string;
    d: Number;
  }
  */
 /** 
  let y:Y = {
    c: 'sathish',
    d: 42,
  }
// ----------------------------- https://bootswatch.com/lux/#top // for Bootstrap
  */

  //const [todoList, setTodoList] = useState<string[]>([]) //here list of strings

  //setTodoList([...todoList, todo])// here array of strings

  /*
type Person = {
  name:String;
  age:number;
}

let person: Person = {
  name = "Sathish"
}
// error the property age is missing here so we have to give age here

let person: Person = {
  name = "ssathish",
  age = 34
}
//Now i want to add age property is optional so we don't get any error
type Person = {
  name:String;
  age?:number;
}
let person: Person =  {
  name = "asa"
  
}
let lotsofPeople: Person[];
-------------------------------------------------
How do i decelre function type

let printName: Function;
let printName: (name: String) => void;

function printName(name: String){ //name will take only string suppose if i want to add any type add any
  console.log(name)
}

printName("hello")

Inetrface Person {
  name: String;
  age?:number
}
Interface Guy extends Person {
  profession: String
} // here i am extending the person field into the Guy

export interface Todo {
   id:number;
   todo: String;
   isDone: Boolean;
}
type Actions =
| { type:'ADD', payload: String }
| { type:'REMOVE', payload: String }
| { type:'EDIT', payload: String }

const TodoReducer = (state:Todo[], action:Actions) => {
  switch(action.type) {
    case "ADD":
      return [...state, { id:Date.now(), todo: action.payload, isDone:false }]
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload)
  }
  default:
    return state;

}
//variables at function
const getFullName = (name:String, surname: String) => {
  return name+" "+surname
};
console.log(getFullName("Moster", "Lesson"))

//object
const User = {name:String; age: number} = {
  name:"Moster",
  age:4
}

let someProperty = string | number | null | undefined | string[] | object;

let popularTags = string[] = ["dragon", "coffee"] //this is the array of strings[]


*/