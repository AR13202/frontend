import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Todaytodos = (props) => {
  const id = props.user_id;
  const [todo,setTodo] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      try{
        const res = await axios.get(`http://localhost:8080/todaytodos/${id}`);
        setTodo(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  },[todo,id]);
  return (
    <div className='todaytodos'>
        <div className='title'>Todos</div>
        <div className='upcomingtodo'>
            {(todo && todo.length >=1) ? (
              <>
              <ul>
              {todo.map((data)=>(
                  <li className='list-item' key={data.todo_id}><p style={{color: 'black'}}>{data.todo}</p></li>
              ))}
              </ul>
              </>
            ) : <p style={{color: 'darkgrey', fontSize: '20px', textAlign: 'center'}}>no todos</p>
            }
        </div>
    </div>
  )
}

export default Todaytodos;