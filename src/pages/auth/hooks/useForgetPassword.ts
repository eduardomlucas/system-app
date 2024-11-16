import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

export function useForgetPassword(){

    const[step, setStep] = useState(1);
    const navigate = useNavigate();
    const [title, setTitle] = useState('Vamos começar, informe o seu email!');
    const stepAtual = () =>{
        return step;
    }
    useEffect(() =>{
        stepAtual();
    }, [step])
    
    const titleAtual = () =>{
        return step;
    }
    useEffect(() =>{
        titleAtual();
    }, [step])
    
    const handleNext = () =>{
        switch(step){
            case 1:
                setStep(2);
                setTitle('Enviamos para o seu email um código de 6 dígitos, informe-o abaixo')
                break;
            case 2:
                setStep(3);
                setTitle('Estamos quase lá, agora informe a sua nova senha')
                break;
            case 3:
                navigate('/login');
        }
    }

    const handleBack = () =>{
        switch(step){
            case 1:
                navigate('/login');
                break;
            case 2:
                setStep(1);
                setTitle('Vamos começar, informe o seu email!')
                break;
            case 3:
                setStep(2);
                setTitle('Enviamos para o seu email um código de 6 dígitos, informe-o abaixo')

        }
    }
    const loginValidationSchema = Yup.object({
        email: Yup.string().email('Email inválido').required('Campo obrigatório'),
        codigo: Yup.number(),
        password: Yup.string(),
        confirmPassword: Yup.string()
    });

    const formik = useFormik({
        initialValues: { 
            email: '',
            codigo: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: loginValidationSchema,
        onSubmit: async (values) => {
            
        }
    });

    return {step, setStep, formik, title, handleNext, handleBack};
}