import { LoginRequest, AuthResponse } from "@/service/auth.interface";
import authService from "@/service/auth.service";
import { useFormik } from 'formik';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export function useLogin(){

    const navigate = useNavigate();

    const loginValidationSchema = Yup.object({
        email: Yup.string().email('Email inválido').required('Campo obrigatório'),
        password: Yup.string().required('Campo obrigatório'),
    });

    const formik = useFormik({
        initialValues: { 
            email: '',
            password: '' 
        },
        validationSchema: loginValidationSchema,
        onSubmit: async (values) => {
          
            const loginDto: LoginRequest = {
                email: values.email,
                password: values.password
            };
            authService.login(loginDto).
            then((response: AuthResponse)=>{
                localStorage.setItem("authToken", response.token);
                localStorage.setItem("authName", response.name);
            }).catch((err: any) =>{
                console.log(err)
                setHaveError(true);
            }).finally(() =>{
                navigate("/");
            });
        }
    });

    const [haveError, setHaveError] = useState(false);

    return{
        formik,
        haveError
    }
}