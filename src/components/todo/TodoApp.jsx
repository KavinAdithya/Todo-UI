
import './TodoApp.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ErrorComponent from './ErrorComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import TodosComponent from './TodosComponent';
import LogoutComponent from './LogoutComponent';

function TodoApp() {
    return (
        <div className="TodoApp">
            
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path = '/'                  element = {<LoginComponent/>}  />
                    <Route path = '/login'             element = {<LoginComponent/>}   />
                    <Route path = '/welcome/:username' element = {<WelcomeComponent/>} />
                    <Route path = '*'                  element = {<ErrorComponent/>}   />
                    <Route path='/todos'               element={<TodosComponent/>}/>
                    <Route path='/logout'               element={<LogoutComponent/>}/>

                </Routes>
                <FooterComponent/>  
            </BrowserRouter>
            
        </div>
    )
}

export default TodoApp;