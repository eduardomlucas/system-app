import Widget from "@/components/widget";
import { BaggageClaim, DollarSign, Key } from "lucide-react";

export function HomePage(){
    
    return(
        <div className="flex flex-col gap-5">
            
            <div className="flex justify-between">
                <Widget title="Vendas" icon={<BaggageClaim/>} description="Hoje" value={2}/>
                <Widget title="Comissão" icon={<DollarSign/>} description="total" value={'R$ 5.000,00'}/>
                <Widget title="Visitas" icon={<Key/>} description="total" value={2} buttonLabel="Consultar" onButtonClick={() => console.log("")}/>
            </div>
            
        </div>
    )
}