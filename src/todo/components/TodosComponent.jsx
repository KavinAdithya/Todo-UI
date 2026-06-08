import { useEffect, useState } from "react";
import { retrieveAllTodos, deleteTodo } from "../service/TodosApiService";

function TodosComponent() {

    const [todos, setTodos] = useState([])
    
    async function retrieveTodos() {

        const response = await retrieveAllTodos(localStorage.getItem("username"))

        setTodos(response.data.data);
        
    }

    try {
        

        useEffect(() => {
            
            retrieveTodos();

        }, [])

        
    } catch (error) {
        console.log("Exception From APi")
        console.log(error)
    }

    async function deleteCurrentTodo(id) {
        await deleteTodo(localStorage.getItem("username"), id)
        retrieveTodos();
    }
    
    return (
        <div className='container'>
            <h1 className="mb-5"> Manage Your Habits </h1> 
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Target Date</th>
                        <th>Is Done?</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr> 
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo => (
                               <tr key={todo.id}>
                                    <td>{todo.todoTitle}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.dueDate}</td>
                                    <td>{todo.completed ? "Completed" : "Pending"}</td>
                                    <td>
                                        <button className="btn btn-success  ">Update</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-warning" onClick={() => deleteCurrentTodo(todo.id)}>Delete</button>
                                    </td>
                               </tr> 
                            )
                        )
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default TodosComponent;