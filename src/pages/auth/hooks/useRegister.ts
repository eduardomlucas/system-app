import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AuthResponse, RegisterRequest } from "@/service/auth.interface";
import authService from "@/service/auth.service";

export function useRegister(){
    
    const navigate = useNavigate();

    const loginValidationSchema = Yup.object({
        name: Yup.string().required('Nome Completo obrigatório'),
        email: Yup.string().email('Email inválido').required('Campo obrigatório'),
        password: Yup.string().required('Campo obrigatório'),
        confirmPassword: Yup.string().required('Campo obrigatório'),
    });

    const formik = useFormik({
        initialValues: { 
            name: '',
            email: '',
            password: '',
            confirmPassword: '', 
        },
        validationSchema: loginValidationSchema,
        onSubmit: async (values) => {
          try {

            if(values.password !== values.confirmPassword){
                return alert("As senhas precisam ser iguais para realizar o cadastro!");
            }

            const registerDto: RegisterRequest = {
                name: values.name,
                email: values.email,
                password: values.password
            };
            authService.register(registerDto).
            then((response: AuthResponse)=>{
                localStorage.setItem("authToken", response.token);
                localStorage.setItem("authName", response.name);
            }).catch((err: any) =>{
                alert(err);
            }).finally(() =>{
                navigate("/");
            });
          } catch (err) {
            alert('Falha no login. Verifique suas credenciais.');
          }
        }
    });

    return{
        formik
    }
}