import { useEffect, useState } from 'react';
import './App.css';
import Newtodo from './Newtodo';

function App() {
  const [todos, settodos] = useState([]);
  const [input,setinput]= useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos").then((result) => {
      result.json().then((response => {
        settodos(response)
      }))
    })
  },[])

  const handleDeltodo = ({id})=>{
    settodos(todos.filter((todo)=> todo.id!==id))
  }

  const handleCompletetodo = (todo)=>{
    settodos(
      todos.map((elem)=>{
        if(elem.id===todo.id){
          return {...elem,completed:!elem.completed}
        }
        return elem;
      }
    ))

  }

  console.log(todos)
  return (
    <>
      <h1>THINGS TO DO:</h1>
      {todos.length!==0?(<div className='container1'>
        {todos.map((todo) => {
          return (
            <div className='note' key={todo.id}>
              <div className="tick" onClick={()=>{handleCompletetodo(todo)}} style={{textDecoration: todo.completed? "line-through" : "" }}>
                <input type="checkbox" id="box" checked={todo.completed} />
                <label className='list' onChange={(e)=>e.preventDefault()}> {todos?todo.title:"nothing to show"}</label>
              </div>
                <button onClick={()=> handleDeltodo(todo)}>X</button>
            </div>
          )
        })}
      </div>):("Add Notes to Display")}
      <Newtodo todos={todos} settodos={settodos} input={input} setinput={setinput}/>
    </>
  );
}

export default App;
