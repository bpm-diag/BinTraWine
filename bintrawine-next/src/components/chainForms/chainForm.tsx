import React from "react";
import { cn } from "@/utils"
import Chain from "@/components/chain";
import AgronomoForm from "@/components/chainForms/dataAcquisition/agronomoForm";
import PeopleForm from "@/components/chainForms/peopleForm";
import ViticoltoreForm from "@/components/chainForms/dataAcquisition/viticoltoreForm";
import ProduttoreForm from "@/components/chainForms/dataAcquisition/produttoreForm";
import ImbottigliatoreForm from "@/components/chainForms/dataAcquisition/imbottiglitoreForm";
import DistributoreForm from "@/components/chainForms/dataAcquisition/distributoreForm";
import RivenditoreForm from "@/components/chainForms/dataAcquisition/rivenditoreForm";
import EnteCertificatoreForm from "@/components/chainForms/dataAcquisition/enteCertificatoreForm";

export interface ChainFormProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

type FormSelection = {
    id: string,
    name: string,
    chainForm: React.ElementType
}

const ChainForm = React.forwardRef<HTMLDivElement, ChainFormProps>(
    ({ className }, ref) => {

        const [selectedChain, setSelectedChain] = React.useState<FormSelection>({ id: "agronomo", name: "Agronomo", chainForm: AgronomoForm });

        const formSelection: Map<string, FormSelection> = new Map([
            ["agronomo", { id: "agronomo", name: "Agronomo", chainForm: AgronomoForm }],
            ["viticoltore", { id: "viticoltore", name: "Viticoltore", chainForm: ViticoltoreForm }],
            ["produttore", { id: "produttore", name: "Produttore", chainForm: ProduttoreForm }],
            ["imbottigliatore", { id: "imbottigliatore", name: "Imbottigliatore", chainForm: ImbottigliatoreForm }],
            ["distributore", { id: "distributore", name: "Distributore", chainForm: DistributoreForm }],
            ["rivenditore", { id: "rivenditore", name: "Rivenditore", chainForm: RivenditoreForm }],
            ["enteCertificatore", { id: "enteCertificatore", name: "Ente Certificatore", chainForm: EnteCertificatoreForm }],
        ]);

        return (
            <div className={cn("bg-surface col-span-3 rounded-sm grid grid-cols-5", className)}>
                {/* Lista Filiera */}
                <div className="bg-surface col-span-1">
                    <Chain onClick={() => setSelectedChain(formSelection.get("agronomo") as FormSelection)} chainType="Agronomo" completed />
                    <Chain onClick={() => setSelectedChain(formSelection.get("viticoltore") as FormSelection)} chainType="Viticoltore" completed />
                    <Chain onClick={() => setSelectedChain(formSelection.get("produttore") as FormSelection)} chainType="Produttore" />
                    <Chain onClick={() => setSelectedChain(formSelection.get("imbottigliatore") as FormSelection)} chainType="Imbottigliatore" />
                    <Chain onClick={() => setSelectedChain(formSelection.get("distributore") as FormSelection)} chainType="Distributore" />
                    <Chain onClick={() => setSelectedChain(formSelection.get("rivenditore") as FormSelection)} chainType="Rivenditore" />
                    <Chain onClick={() => setSelectedChain(formSelection.get("enteCertificatore") as FormSelection)} chainType="Ente Certificatore" />
                </div>
                {/* Dettaglio Catena */}
                <PeopleForm chainType={selectedChain.name} />
                {/* Form Dettaglio Catena */}
                <div className="col-span-2 flex flex-col">
                    <selectedChain.chainForm />
                </div>
            </div>
        )
    });

export default ChainForm;