import React from 'react'
import {v4 as uuidV4} from 'uuid'

export default function Newtodo({todos, settodos,input,setinput}) {

    const onInputchange = (e) =>{
        setinput(e.target.value)
    }

    const onFormSubmit=(e)=>{
        e.preventDefault();
        settodos([...todos,{id: uuidV4(),title:input,completed:false}]);
        setinput("");
        console.log(todos)
    }
  return (
      <form onSubmit={onFormSubmit}>
        <div className="container2">
            <h2>DONE:{todos.filter(todo => todo.completed).length}</h2>  
            <input type="text" value={input} required onChange={onInputchange} placeholder='Enter new Task'/>
            <button type='submit'>Add Task</button>
        </div>
      </form>
  )
}
