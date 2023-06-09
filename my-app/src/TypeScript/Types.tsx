/*

import { ChangeEvent, useState } from "react";
import { createContext } from "vm";
import { TodoTask } from "../Components/TodoTasks";
import { ITask } from "./Interfaces";
/*
export const Types = {



interface IprogramingLanguage {
    name: String;
    awesome: Boolean
    age?:Number // if you keep ? this so need we get any error even if you decleared or not
}

const typeScript: IprogramingLanguage = {
    name: "Typescript",
    awesome: true
}



interface IUser {
    name: String;
    email: String,
    age: Number;
    isMarried: Boolean;
}

const fetchData = (apiUrl: string): Promise<IUser> => {
    return fetch(apiUrl)
}

const user: IUser = fetchData('apiUrl.com/api')
user.age
user.name


enum Cheese {
    cheddar = "cheddar",
    gouda = "gouda",
    goat = "Goat",
    blueMould = "blueMould"
}
const serveCheese = (cheeseType:Cheese, servings:Number): void => {
    console.log(`you want ${servings} servings of ${cheeseType}`)
}

}
*/

/*
const App:FC = () => {


const [task, setTask] = useState<string>("");  
const [deadline, setDeadLine] = useState<number>(0);
const [todoList, setTodoList] = useState<ITask[]>([]);

const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === "task"){
        setTask(event.target.value)
    }else{
        setDeadLine(Number(event.target.value))
    }
}

const addTask = () => {
    const newTask = {
        taskName: task, deadline: deadline
    }
    setTodoList([...todoList, newTask])
}
const completeTask = (taskNameToDelete: string) => {
 setTodoList(todoList.filter((task) => {
    return task.taskName != taskNameToDelete
 }))
}

return (
    <div>

        {todoList.map((task: ITask, key: number) => {
             return <TodoTask task ={task} key={key} completeTask={completeTask} />
        })}

    </div>
)
}
 


1. `boolean`: `let isDone: boolean = false;`
2. `number`: `let count: number = 42;`
3. `string`: `let message: string = "Hello, world!";`
4. `null`: `let x: null = null;`
5. `undefined`: `let y: undefined = undefined;`
6. `any`: `let z: any = "Hello, world!";`
7. `void`: `function logMessage(message: string): void { console.log(message); }`
8. `never`: `function throwError(message: string): never { throw new Error(message); }`
9. `object`: `let person: { name: string, age: number } = { name: "John", age: 30 };`
10. `Array`: `let numbers: number[] = [1, 2, 3, 4, 5];`
11. `Tuple`: `let pair: [string, number] = ["hello", 42];`
12. `Enum`: `enum Color { Red, Green, Blue }; let c: Color = Color.Green;`
13. `Union`: `let value: string | number = "abc"; value = 123;`
14. `Intersection`: `type Person = { name: string } & { age: number }; let person: Person = { name: "John", age: 30 };`
15. `Function`: `function addNumbers(x: number, y: number): number { return x + y; }`
16. `Class`: `class Person { name: string; age: number; constructor(name: string, age: number) 
    { this.name = name; this.age = age; } }`


/*
Note: export const Person: FC = ({name, email, age}: Props) //now you will get error since it is a functional comp
ponent you should not decleare props
 or you can do like this
interface Props{
    name: string;
   age:number;
   email:string;
}
export const Person; FC<Props> = ({name, email, age}) => {}

const [country, setCountry] = useState<string | null>(null)
const [country1, setCountry1] = useState<string>("")

type NameType = "Mr"| "Mrs" in this it takes only one thing in that 
*/


/*

export interface Order{
    id:string;
    items: OrderItem[];
    totalPrice:number;
    name: string;
    address: string;
    addressLatLng:LatLng
    paymentId: string;
    status: OrderStatus;
    user: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date
  }

  const orderSchema = new Schema<Order>({
      name: {type: String, required: true},
      address: {type: String, required: true},
      addressLatLng: {type: LatLngSchema, required: true},
      paymentId: {type: String},
      totalPrice: {type: Number, required: true},
      items: {type: [OrderItemSchema], required: true},
      status: {type: String, default: OrderStatus.NEW},
      user: {type: Schema.Types.ObjectId, required: true}
  },{
      timestamps: true,
      toJSON:{
          virtuals: true
      },
      toObject:{
          virtuals: true
      }
  });

  
  https://github.com/nasirjd/foodmine-course/blob/master/backend/src/models/order.model.ts

  */