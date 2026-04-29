import { createContext,  useContext,  useState } from "react";
import { Navigate } from "react-router-dom";

export const ApplicationContext = createContext();

export const useAuth = () => useContext(ApplicationContext)

export function AuthenticatedRoute({children}) {
    const auth = useAuth()

    if (auth.isAuthenticated) return children
    return <Navigate to='/login'/>
}

function AuthenticationComponent({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function login(username, password) {
        if (username === "Techcrack" && password === "Kavin@3") {
            setIsAuthenticated(true)
            return true
        }
        else  {
            setIsAuthenticated(false)
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
