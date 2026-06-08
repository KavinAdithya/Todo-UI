import {useParams, Link, Navigate} from 'react-router-dom'
import { useAuth } from '../security/AuthenticationComponent';

function WelcomeComponent() {
    const {username} = useParams()
    const auth = useAuth();

    if (!auth.isAuthenticated)
        return <Navigate to='/login'/>

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

export default WelcomeComponent;