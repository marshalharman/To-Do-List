import React from 'react'


export const TodoItem = ({todo, onDelete}) => {
    let myStyle = {

        margin:"40px auto"
    }
    return (
        <div style={myStyle}>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>

        </div>
    )
}
