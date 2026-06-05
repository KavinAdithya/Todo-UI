import { createContext,  useContext,  useState } from "react";
import { Navigate } from "react-router-dom";
import { executeJwtAuthentication } from "../service/AuthApiService";

export const ApplicationContext = createContext();

export const useAuth = () => useContext(ApplicationContext)

export function AuthenticatedRoute({children}) {
    const auth = useAuth()

    if (auth.isAuthenticated) return children
    return <Navigate to='/login'/>
}

function AuthenticationComponent({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    async function login(username, password) {
        try {

            const response = await executeJwtAuthentication(username, password)
            setIsAuthenticated(true)

            localStorage.setItem("token", response.data);

            return true
        } catch (error) {
            setIsAuthenticated(false)
            console.log(error)
            return false
        }
    }

    function logout() {
        setIsAuthenticated(false)
    }

    return (
        <ApplicationContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </ApplicationContext.Provider>
    )
}

export default AuthenticationComponent;
