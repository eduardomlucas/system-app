import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useRegister } from "./hooks/useRegister";

export function RegisterPage(){
    
    const hook = useRegister();
    
    return(
        <div className="flex p-[10%] justify-center">
            <form onSubmit={hook.formik.handleSubmit}>
                <Card className="w-[400px] ">
                    <CardHeader>
                        <CardTitle>Cadastro</CardTitle>
                        <CardDescription>Informe seus dados a baixo.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        
                            <div className="grid w-full items-center gap-4">
                                <Input id="name" type="text" placeholder="Nome" value={hook.formik.values.name} onChange={hook.formik.handleChange} onBlur={hook.formik.handleBlur}/>
                                <Input id="email" type="email" placeholder="Email" value={hook.formik.values.email} onChange={hook.formik.handleChange} onBlur={hook.formik.handleBlur}/>
                                <Input id="password" type="password" placeholder="Senha" value={hook.formik.values.password} onChange={hook.formik.handleChange} onBlur={hook.formik.handleBlur}/>
                                <Input id="confirmPassword" type="password" placeholder="Confirme sua Senha" value={hook.formik.values.confirmPassword} onChange={hook.formik.handleChange} onBlur={hook.formik.handleBlur}/>
                            </div>
                        
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Link to={"/"}><Button variant="outline">Voltar</Button></Link>
                        <Button type="submit">Cadastrar</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}