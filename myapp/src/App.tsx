import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
let isTeacher: boolean = false;
const name: string = "Anaya";
let age: number = 14;

let colors:string[] = ["pink", "orange", "purple"];

let teacher = new Person();

teacher.name = name;
teacher.age = age;
teacher.isteacher = isTeacher;


let people: Person[] = [
    { name: "Rob", age: 39, isTeacher: true },
       { name: "Rob", age: 39, isTeacher: true },
    { name: "Jane", age: 28, isTeacher: false },
    { name: "Sam", age: 42, isTeacher: false },

  ];
  return Person;
  

}
class Person {

  name!: string;

  age!: number;

}

export default App