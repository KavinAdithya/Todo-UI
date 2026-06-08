import { useState } from 'react';
import {useNavigate, Navigate} from 'react-router-dom'
import { useAuth } from '../security/AuthenticationComponent';
import './TodoApp.css'

function LoginComponent() {
    const [username, setUsername] = useState("dummy")
    const [password, setPassword] = useState("Techcrack@3")

    const [isFailed, setIsFailed] = useState(false)
    const navigate = useNavigate()
    
    const auth = useAuth();

    if (auth.isAuthenticated) return <Navigate to={`/welcome/${username}`}></Navigate>
    

    function setUserNameState(event) {
        setUsername(event.target.value)
    }

    function setPasswordState(event) {
        setPassword(event.target.value)
    }

    async function authenticateUserCredentials() {
        const success = await auth.login(username, password)
        if (success) {
            navigate(`/welcome/${username}`)
        }
        else  {
            setIsFailed(true)
        } 
    }

    return (
        <div className="login">
            <h1>
                Time To Lead !
            </h1>
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

export default LoginComponent;