import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useLogin } from "./hooks/useLogin";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ThumbsDown } from "lucide-react";
export function LoginPage(){

    const hook = useLogin();

    return(
        <div id="login" className="flex p-[10%] justify-center">
            <form onSubmit={hook.formik.handleSubmit}>
                    <Card className="min-w-[400px] ">
                        <CardHeader>
                            <CardTitle>Entrar</CardTitle>
                            <CardDescription>Entre no nosso portal por aqui.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form>
                                <div className="grid w-full items-center gap-4">
                                    <Input value={hook.formik.values.email} 
                                        name="email" 
                                        id="email" 
                                        type="email" 
                                        placeholder="Email"
                                        onChange={hook.formik.handleChange}
                                        onBlur={hook.formik.handleBlur} 
                                    />

                                    <Input value={hook.formik.values.password} 
                                        name="password" 
                                        id="password" 
                                        type="password" 
                                        placeholder="Senha"
                                        onChange={hook.formik.handleChange}
                                        onBlur={hook.formik.handleBlur} 
                                    />
                                    {hook.haveError === true && (
                                        <Alert variant={"destructive"}>
                                            <ThumbsDown className="h4 w-4"/>
                                            <AlertTitle>Email, ou senha inválidos</AlertTitle>
                                            <AlertDescription>verifique e tente novamente!</AlertDescription>
                                        </Alert>
                                    )}
                                </div>
                                
                            </form>
                            
                        </CardContent>
                        <a href="/forget-password" className="flex justify-center p-5">Esqueceu sua senha?</a>
                        <CardFooter className="flex justify-between">
                            <Link to={"/register"}><Button variant="outline">Cadastrar</Button></Link>
                            <Button type="submit">Entrar </Button>
                        </CardFooter>
                    </Card>
            </form>
        </div>
    )
}