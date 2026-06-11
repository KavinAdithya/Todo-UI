import './TodoApp.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ErrorComponent from './ErrorComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelcomeComponent';
import TodosComponent from './TodosComponent';
import LogoutComponent from './LogoutComponent';
import AuthenticationComponent from '../security/AuthenticationComponent'
import { AuthenticatedRoute } from '../security/AuthenticationComponent'
import Test from './TestComponent';
import TodoFormComponent from './TodoFormComponent';

function TodoApp() {

    return (
            <AuthenticationComponent> 
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path = '/'                  element = {<LoginComponent/>}  />
                        <Route path = '/login'             element = {<LoginComponent/>}   />
                        <Route path = '*'                  element = {<ErrorComponent/>}   />
                        <Route path = '/welcome/:username' element = {
                            <AuthenticatedRoute>
                                <WelcomeComponent/>
                            </AuthenticatedRoute>} />
                        <Route path='/todos'               element={
                                <AuthenticatedRoute>
                                    <TodosComponent/>
                                </AuthenticatedRoute>
                                }/>
                        <Route path='/logout'               element={
                                <AuthenticatedRoute>
                                    <LogoutComponent/>
                                </AuthenticatedRoute>
                                }/>
                        <Route path='/users/todo/:id' element = {
                            <AuthenticatedRoute>
                                <TodoFormComponent/>
                            </AuthenticatedRoute>
                            }
                        />
                        <Route path='/test' element={
                            <Test></Test>
                        }></Route>
                    </Routes>
                    <FooterComponent/>  
                </BrowserRouter>
            </AuthenticationComponent>
    )
}

export default TodoApp;