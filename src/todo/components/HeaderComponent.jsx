import {Link} from 'react-router-dom'
import { useAuth } from '../security/AuthenticationComponent';

function HeaderComponent() {
    const auth = useAuth();

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <h1 className="navbar-brand ms-2 fs-2 fw-bold text-black"> Techcrack</h1>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">
                                    { auth.isAuthenticated && 
                                        <Link className="nav-link" to= {`/welcome/${localStorage.getItem("username")}`}>
                                            Home
                                        </Link> } 
                                </li>
                                <li className="nav-item fs-5">
                                     { auth.isAuthenticated && 
                                        <Link className="nav-link" to="/todos">
                                            Todos
                                        </Link> }
                                </li> 
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {!auth.isAuthenticated &&
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link> }
                            </li>
                            <li className="nav-item fs-5">
                                {auth.isAuthenticated &&
                                    <Link className="nav-link" to="/logout" onClick={auth.logout}>
                                        Logout
                                    </Link> }
                                </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent;