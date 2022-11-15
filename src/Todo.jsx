import React from 'react'

export default function Todo({todo,togolTodo}) {
   function handelTodoClick(){
    togolTodo(todo.id)
   }
  return (
    <div>
        <label className='container'>
          <input type='checkbox' checked={todo.complete} onChange={handelTodoClick}/>
           {todo.name}
           <span className='checkmark'></span>
           <hr/>
        </label>
        
        
        </div>
  )
}
