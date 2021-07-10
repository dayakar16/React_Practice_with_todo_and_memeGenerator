import React from 'react';

function Todo(props) {
     const completedStyle = { 
         fontStyle : "italic",
         color : "green", 
         textDecoration : "line-through"
     }
     
    return (
        <div>
        <input onChange={()=>{props.handleChange(props.todoitem.id)}} type='checkbox' checked={props.todoitem.completed}></input>
        <p style={props.todoitem.completed ? completedStyle : null}> {props.todoitem.task} </p>
        <hr></hr>
        </div>
    )
}

export default Todo;