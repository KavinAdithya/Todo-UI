import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useAuth } from './security/AuthenticationComponent';
import './TodoApp.css'

function LoginComponent() {
    const [username, setUsername] = useState("Techcrack")
    const [password, setPassword] = useState("Kavin@3")

    const [isFailed, setIsFailed] = useState(false)
    const navigate = useNavigate()
    
    const auth = useAuth();
    

    function setUserNameState(event) {
        setUsername(event.target.value)
    }

    function setPasswordState(event) {
        setPassword(event.target.value)
    }

    function authenticateUserCredentials() {
        if (auth.login(username, password)) {
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