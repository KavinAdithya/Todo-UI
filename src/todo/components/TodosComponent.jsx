import { useEffect, useState } from "react";
import { retrieveAllTodos, deleteTodo } from "../service/TodosApiService";
import { useNavigate } from "react-router-dom";

function TodosComponent() {

    const [todos, setTodos] = useState([])
    const navigate = useNavigate()
    const [message, setMessage] = useState(null)
    const [isFailed, setIsFailed] = useState(false);

    async function retrieveTodos() {

    try {

        const response =
            await retrieveAllTodos(
                localStorage.getItem("username")
            );

        setTodos(response.data.data);

        setIsFailed(false);

    } catch(error) {

        setIsFailed(true);
        if(error.response) {

            setMessage(
                error.response.data.message
            );

        } else {

            setMessage(
                "Unable to retrieve todos"
            );
        }

        console.log(error);
    }
}
    
    useEffect(() => {
        
        retrieveTodos();
        // eslint-disable-next-line
    }, [])

    
    async function deleteCurrentTodo(id) {

    try {

        await deleteTodo(
            localStorage.getItem("username"),
            id
        );

        setIsFailed(false);

        setMessage(
            "Todo retrieved successfully"
        );

        retrieveTodos();

    } catch(error) {

        setIsFailed(true);

        if(error.response) {

            setMessage(
                error.response.data.message
            );

        } else {

            setMessage(
                "Failed To Delete Todo"
            );
        }

        console.log(error);
    }
}

    function navigateCreateComponent() {
        navigate(`/users/todo/-1`)
    }

    function updateTodo(id) {
        navigate(`/users/todo/${id}`)
    }
    
    return (
        <div className='container'>
            <h1 className="mb-5"> Manage Your Habits </h1>
            {
                message && <div  className={
                                                isFailed
                                                    ? "alert alert-danger"
                                                    : "alert alert-success"
                                            }>{message}</div>
            } 
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
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.dueDate}</td>
                                    <td>{todo.completed ? "Completed" : "Pending"}</td>
                                    <td>
                                        <button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Update</button>
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
            <button className="btn btn-success" onClick={navigateCreateComponent}>
                Add Task
            </button>
        </div>
    )
}

export default TodosComponent;