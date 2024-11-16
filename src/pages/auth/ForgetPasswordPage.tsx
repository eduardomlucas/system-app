import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useForgetPassword } from "./hooks/useForgetPassword";

export function ForgetPasswordPage(){

    const hook = useForgetPassword();

    return (
        <div className="flex p-[10%] justify-center">
            <form onSubmit={hook.formik.handleSubmit}>
                <Card className="w-[400px] ">
                    <CardHeader>
                        <CardTitle>Esqueceu sua senha</CardTitle>
                        <CardDescription>{hook.title}</CardDescription>
                    </CardHeader>
                    <CardContent className="grid w-full items-center gap-4">
                        {hook.step === 1 && (
                            <Input id="email" type="email" placeholder="Email" value={hook.formik.values.email} onChange={hook.formik.handleChange} onBlur={hook.formik.handleBlur}/>
                        )}
                        {hook.step === 2 && (
                            <Input id="codigo" type="text" placeholder="Código de 6 Dígitos" value={hook.formik.values.codigo} onChange={hook.formik.handleChange} onBlur={hook.formik.handleBlur}/>
                        )}
                        {hook.step === 3 && (
                            <div className="flex flex-col gap-5">
                                <Input id="password" type="password" placeholder="Digite sua nova senha" value={hook.formik.values.password} onChange={hook.formik.handleChange} onBlur={hook.formik.handleBlur}/>
                                <Input id="confirmPassword" type="password" placeholder="Confirme sua senha" value={hook.formik.values.confirmPassword} onChange={hook.formik.handleChange} onBlur={hook.formik.handleBlur}/>
                            </div>
                        )}
                        <div className="p-3 flex justify-between items-center font-bold">
                            <div className="w-10 h-10  rounded-full bg-white text-black py-1">1</div>
                            <div className={`w-10 h-10 rounded-full border-2 py-1 ${hook.step >= 2 ? 'bg-white text-black' : ''}`}>2</div>
                            <div className={`w-10 h-10 rounded-full border-2 py-1 ${hook.step === 3 ? 'bg-white text-black' : ''}`}>3</div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline" onClick={hook.handleBack}>Voltar</Button>
                        <Button type="button" onClick={hook.handleNext} >Próximo</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}