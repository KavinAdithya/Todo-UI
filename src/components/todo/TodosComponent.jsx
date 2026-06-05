import { useEffect, useState } from "react";
import { retrieveAllTodos } from "./service/TodosApiService";

function TodosComponent() {

    const [todos, setTodos] = useState([])

    try {
        useEffect(() => {
            async function retrieveTodos() {

                const response = await retrieveAllTodos("dummy")

                setTodos(response.data.data);
                console.log(response)
            }
            retrieveTodos();

        }, [])

        
    } catch (error) {
        console.log("Exception From APi")
        console.log(error)
    }
    
    return (
        <div className='container'>
            <h1> Manage Your Habits </h1>
            <table className='table'>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Is Done?</td>
                        <td>Target Date</td>
                    </tr> 
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo => (
                               <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.todoTitle}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.completed ? "Completed" : "Pending"}</td>
                                    <td>{todo.dueDate}</td>
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