import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Todo = (props) => {
  const id = props.user_id;
  const [todos,setTodos] = useState([]);
  useEffect(()=>{
      const fetchData = async () =>{
        try{
          const res =await axios.get(`http://localhost:8080/todos/${id}`);
          setTodos(res.data);
        }catch(err){
          console.log(err);
        }
      }
      fetchData();
  },[id]);
  useEffect(()=>{
    if(todos){
      console.log(todos);
    }
  },[todos]);
  const [todo,setTodo] = useState('');
  const handleClick = async () => {
    try{
      const res = await axios.post("http://localhost:8080/todos",{todo,id});
      console.log(res.data);
      window.location.reload(true);
    }catch(err){
      console.log(err);
    }
  } 
  const delTodo = async(id) =>{
    try{
      // console.log(id);
      await axios.delete(`http://localhost:8080/todos/${id}`);
      // console.log(res);
      // window.location.reload(true);
      setTodos((prevtodo) => prevtodo.filter((data) => data.todo_id !== id));
    }catch(err){
      console.log(err);
    }
  };
  return (
    <div className='main-content'>
      <div className='main-title'>Todos
        <hr align={'left'}/>
      </div>
      <div className='todo-add'>
        <input type='text' placeholder='add a todo' name='todo' onChange={(ev) => setTodo(ev.target.value)}/>
        <button onClick={handleClick}>Submit</button>
        <hr align={'left'}/>
      </div>
      <div className='todos'>
        {todos.map((data)=>(
          <div className='todo' key={data.todo_id}>
          <div>{data.todo}</div>
          <button onClick={()=>delTodo(data.todo_id)}>Delete</button>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Todo;
