import { useState, useEffect } from "react";
import { createTodo, getTodo, updateTodo } from "../service/TodosApiService";
import { useNavigate, useParams } from "react-router-dom";

function TodoFormComponent() {

    const {id} = useParams()

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [completed, setCompleted] = useState(false);  
    const username = localStorage.getItem('username')

    const navigate = useNavigate()
    const [message, setMessage] = useState(null)

    async function retrieveTodo(username, id) {
        return await getTodo(username, id)
                .then(response => {
                    console.log(response)
                    return response.data.data
                })
                .catch (
                    error =>  {
                        setMessage(error.message)
                        console.log(error)
                    }

                )
                
    }

        async function loadTodo() {

        const todo =
            await retrieveTodo(
                username,
                id
            );

        setTitle(todo.title);
        setDescription(todo.description);
        setDueDate(todo.dueDate);
        setCompleted(todo.completed);
    }

    useEffect(() => {

        if(id !== "-1") {

            
            loadTodo();
        }

    }, // eslint-disable-next-line 
    [id]);


    async function setTodoData() {


        if (id === "-1") {
            const todo = {
                title,
                description,
                dueDate,
                completed
            };

            await createTodo(localStorage.getItem("username"), todo)
                .then(
                    (response) => {
                        alert(response.data.message);
                        navigate(`/todos`)
                    }
                )
                .catch (
                    error =>  {
                        setMessage(error.message)
                        console.log(error)
                    }

                )
        } else {
            const todo = {
                id,
                title,
                description,
                dueDate,
                completed
            };

            await updateTodo(localStorage.getItem("username"),  todo)
                .then(
                    (response) => {
                        console.log(response)
                        alert(response.data.message);
                        navigate(`/todos`)
                    }
                )
                .catch (
                    error =>  {
                        setMessage(error.message)
                        console.log(error)
                    }

                )
        }

        
    }

    return (
        <div className="container mt-5">

            <h1 className="text-center mb-4">
                Build Discipline
            </h1>
            {
                message && <div className="alert alert-danger">{message}</div>
            }
            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="mb-3">
                        <label className="form-label">
                            Title
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={(e) =>
                                setTitle(e.target.value)
                            }
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Description
                        </label>

                        <textarea
                            className="form-control"
                            rows="3"
                            value={description}
                            onChange={(e) =>
                                setDescription(e.target.value)
                            }
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Target Date
                        </label>

                        <input
                            type="date"
                            className="form-control"
                            value={dueDate}
                            onChange={(e) =>
                                setDueDate(e.target.value)
                            }
                        />
                    </div>

                    <div className="form-check mb-4">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            checked={completed}
                            onChange={(e) =>
                                setCompleted(
                                    e.target.checked
                                )
                            }
                        />

                        <label className="form-check-label">
                            Is Done?
                        </label>
                    </div>

                    <div className="text-center">
                        <button
                            className="btn btn-success px-4"
                            onClick={setTodoData}
                        >
                            Submit
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default TodoFormComponent;