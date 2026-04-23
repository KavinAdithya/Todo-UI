import { useState } from 'react';
import './TodoApp.css'
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'

function TodoApp() {
    return (
        <div className="TodoApp">
            <HeaderComponent/>
            <BrowserRouter>
                <Routes>
                    <Route path = '/'                  element = {<LoginComponent/>}  />
                    <Route path = '/login'             element = {<LoginComponent/>}   />
                    <Route path = '/welcome/:username' element = {<WelcomeComponent/>} />
                    <Route path = '*'                  element = {<ErrorComponent/>}   />
                    <Route path='/todos'               element={<TodosComponent/>}/>
                    <Route path='/logout'               element={<LogoutComponent/>}/>

                </Routes>
            </BrowserRouter>
            <FooterComponent/>
        </div>
    )
}

function LoginComponent() {
    const [username, setUsername] = useState("Techcrack")
    const [password, setPassword] = useState("Techcrack@3")

    const [isSuccess, setIsSucess] = useState(false)
    const [isFailed, setIsFailed] = useState(false)
    const navigate = useNavigate()
    

    function setUserNameState(event) {
        setUsername(event.target.value)
    }

    function setPasswordState(event) {
        setPassword(event.target.value)
    }

    function authenticateUserCredentials() {
        if (username === "Techcrack" && password === "Kavin@3") {
            navigate(`/welcome/${username}`)
            setIsSucess(true)
            setIsFailed(false)
        }
        else  {
            setIsSucess(false)
            setIsFailed(true)
        } 
    }

    return (
        <div className="login">
            <h1>
                Time To Lead !
            </h1>
            {isSuccess && <div>Successfully Authenticated {username} !</div>}
            {isFailed && <div> Failed to authenticate you credentials.</div>}
            <div>
                <label>User Name : </label>
                <input type="text" name="username"  value={username} onChange={setUserNameState}></input>
            </div>
            <div>
                <label>Password : </label>
                <input type="password" name="password" value={password} onChange={setPasswordState}></input>
            </div>
            <div>
                <button type="button" name="login" onClick={authenticateUserCredentials}>Login</button>
            </div>
        </div>
    )
}

function WelcomeComponent() {
    const {username} = useParams()

    return (
        <div className="WelcomeComponent">
            <h1>
                Welcome Techiess {username} 
            </h1>
            <div>
                Smart Enough To understand the dynamics of people.
            </div>
            <div>
                Manager your todos - <Link to="/todos">Click</Link><br/>
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>
                Sorry for 404 issue.
            </h1>
            <div>
                We are working hard to make you easy. It need some more time to ensure it.
            </div>
        </ div>
    )
}

function TodosComponent() {
    const todayDate = new Date()
    const targetDate = new Date(todayDate.getFullYear() + 4, todayDate.getMonth(), todayDate.getDate())
    const todos = [
        {id : 1, description : "Learn Java", isDone : false, targetDate : targetDate}, 
        {id : 2, description : "Master technology", isDone : false, targetDate : targetDate},
        {id : 3, description : "Achieve Dreams", isDone : false, targetDate : targetDate},
    ]

    return (
        <div className='TodosComponent'>
            <h1> Manage Your Habits </h1>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Description</td>
                        <td>Is Done?</td>
                        <td>Target Date</td>
                    </tr> 
                </thead>
                <tbody>
                    {
                        todos.map(
                            todo => (
                               <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.isDone.toString()}</td>
                                    <td>{todo.targetDate.toDateString()}</td>
                               </tr> 
                            )
                        )
                    }
                </tbody>
            </table>
            
        </div>
    )
}

function HeaderComponent() {
    return (
        <div>
            Header <hr/>
        </div>
    )
}

function FooterComponent() {
    return (
        <div>
           <hr /> Footer 
        </div>
    )
}

function LogoutComponent() {
    return (
        <div className='LogoutComponent'>
            <div>
                <h1>Logged Out.</h1>
            </div>
            <div>
                <h2> Thanks for using our app. Come back soon @. </h2>
            </div>
        </div>
    )
}

export default TodoApp;