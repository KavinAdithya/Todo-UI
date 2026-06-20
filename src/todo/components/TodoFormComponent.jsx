import { useState, useEffect } from "react";
import { createTodo, getTodo, updateTodo } from "../service/TodosApiService";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

function TodoFormComponent() {

    const {id} = useParams()

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [completed, setCompleted] = useState(false);  
    const username = localStorage.getItem('username')

    const navigate = useNavigate()

    async function retrieveTodo(username, id) {
        return await getTodo(username, id)
                .then(response => {
                    console.log(response)
                    return response.data.data
                })
                .catch (
                    error =>  {
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

    
    async function setTodoData(values) {
        
        if (id === "-1") {
            const todo = {
                            title: values.title,
                            description: values.description,
                            dueDate: values.dueDate,
                            completed: values.completed
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
                        alert(error.message)
                        console.log(error)
                    }

                )
        } else {
           const todo = {
                            id : id,
                            title: values.title,
                            description: values.description,
                            dueDate: values.dueDate,
                            completed: values.completed
                        };

            await updateTodo(username,  todo)
                .then(
                    (response) => {
                        alert(response.data.message)
                        navigate(`/todos`)
                    }
                )
                .catch (
                    error =>  {
                        alert(error.message)
                        console.log(error)
                    }

                )
        }

        
    }

    function validate(values) {
        var errors = {}

        if (!values.title || values.title.length <= 5)
            errors.title = 'Title should be greater than 5 characters'
        
        if (!values.description || values.description.length <= 5) 
            errors.description = 'Description should be greater than 5 characters'

        if (!values.dueDate || values.dueDate < new Date())
            errors.dueDate = 'Date must be in future'


        return errors
    }

    return (

        <>
            <Formik
                initialValues={{title, description, dueDate, completed}}
                enableReinitialize={true}
                onSubmit={setTodoData}
                validate={validate}
                validateOnChange={false}
                validateOnBlur={false}>
                {
                    (props) => (
                        
                        <Form>
                            <h1 className="m-5">Build Discipline</h1>
                            <ErrorMessage 
                                name="description"
                                component="div"
                                className="alert alert-danger"
                            />
                            <ErrorMessage 
                                name="title"
                                component="div"
                                className="alert alert-danger"
                            />
                            <ErrorMessage 
                                name="dueDate"
                                component="div"
                                className="alert alert-danger"
                            />
                            <fieldset className="form-group">
                                <label>Title</label>
                                <Field type="text" name="title"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label >Description</label>
                                <Field type="text"  name="description"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field type="date" name="dueDate"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Is Done?</label>
                                <Field type="checkbox"name="completed"></Field>
                            </fieldset>
                            <div className="text-center">
                                <button
                                    className="btn btn-success px-4 m-3"
                                    type="submit"
                                >
                                    Save
                                </button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </>
    );
}

export default TodoFormComponent;


       // <div className="container mt-5">

        //     <h1 className="text-center mb-4">
        //         Build Discipline
        //     </h1>
        //     {
        //         message && <div className="alert alert-danger">{message}</div>
        //     }
        //     <div className="row justify-content-center">

        //         <div className="col-md-6">

        //             <div className="mb-3">
        //                 <label className="form-label">
        //                     Title
        //                 </label>

        //                 <input
        //                     type="text"
        //                     className="form-control"
        //                     value={title}
        //                     onChange={(e) =>
        //                         setTitle(e.target.value)
        //                     }
        //                 />
        //             </div>

        //             <div className="mb-3">
        //                 <label className="form-label">
        //                     Description
        //                 </label>

        //                 <textarea
        //                     className="form-control"
        //                     rows="3"
        //                     value={description}
        //                     onChange={(e) =>
        //                         setDescription(e.target.value)
        //                     }
        //                 />
        //             </div>

        //             <div className="mb-3">
        //                 <label className="form-label">
        //                     Target Date
        //                 </label>

        //                 <input
        //                     type="date"
        //                     className="form-control"
        //                     value={dueDate}
        //                     onChange={(e) =>
        //                         setDueDate(e.target.value)
        //                     }
        //                 />
        //             </div>

        //             <div className="form-check mb-4">
        //                 <input
        //                     type="checkbox"
        //                     className="form-check-input"
        //                     checked={completed}
        //                     onChange={(e) =>
        //                         setCompleted(
        //                             e.target.checked
        //                         )
        //                     }
        //                 />

        //                 <label className="form-check-label">
        //                     Is Done?
        //                 </label>
        //             </div>

        //             <div className="text-center">
        //                 <button
        //                     className="btn btn-success px-4"
        //                     onClick={setTodoData}
        //                 >
        //                     Submit
        //                 </button>
        //             </div>

        //         </div>

        //     </div>

        // </div>