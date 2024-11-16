import {createBrowserRouter} from 'react-router-dom';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { HomePage } from './pages/HomePage';
import AuthGuard from './config/AuthGuard';
import { ForgetPasswordPage } from './pages/auth/ForgetPasswordPage';

const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/register",
        element: <RegisterPage/>
    },
    {
        path: "/forget-password",
        element: <ForgetPasswordPage/>
    },
    {
        path: "/",
        element: (
            <AuthGuard>
                <HomePage/>
            </AuthGuard>
        )
    },
])

export default router;