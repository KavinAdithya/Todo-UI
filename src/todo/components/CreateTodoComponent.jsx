import { useState } from "react";
import { createTodo } from "../service/TodosApiService";

function CreateTodoComponent() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [completed, setCompleted] = useState(false);

    async function setTodoData() {

        const todo = {
            todoTitle: title,
            description,
            dueDate,
            completed
        };

        await createTodo(localStorage.getItem("username"), todo)
    }

    return (
        <div className="container mt-5">

            <h1 className="text-center mb-4">
                Build Discipline
            </h1>

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

export default CreateTodoComponent;