import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import Account from "@/components/account";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/utils";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogTrigger
} from "@/components/ui/dialog"
import SearchPeopleDialog from "@/components/chainForms/searchPeopleDialog";
import { api } from "@/utils/api";

export interface PeopleFormProps
    extends React.HTMLAttributes<HTMLDivElement> {
    idLotto: number,
    chainType: string;
    selected: "MANUALE" | "SENSORI";
    setManuale: React.Dispatch<React.SetStateAction<"MANUALE" | "SENSORI">>
}

const PeopleForm = (props: PeopleFormProps) => {
    const { className, idLotto, chainType, selected, setManuale } = props;
    const utils = api.useContext()
    const lotto = api.lotto.getLotto.useQuery(idLotto);
    const deletePerson = api.lotto.deletePerson.useMutation({
        onSuccess() {
            utils.lotto.getLotto.invalidate()
            utils.lotto.getAllLotti.invalidate()
        }
    })

    return (
        <div className={cn("p-7 flex flex-col col-span-2 gap-8 bg-white", className)}>
            {/* Titolo */}
            <div>
                <p className="text-primary font-primary text-xl font-bold">{chainType}</p>
            </div>
            {/* Created By */}
            <div className="flex flex-col items-start">
                <p className="text-primary font-primary text-base font-semibold">Creato da</p>
                {lotto.isFetched && <Account className="bg-accent" icon={false} variant='selected' name={lotto.data?.creator.name} surname={lotto.data?.creator.surname} />}
            </div>
            {/* Aggiunta Persone */}
            <div className="flex flex-col gap-4">
                {/* Titoli */}
                <div className="flex flex-row items-start">
                    <div className="flex flex-col basis-1/2">
                        <p className="text-primary font-primary text-base font-semibold">Collaboratori:</p>
                        <p className="text-black_dim font-primary text-base font-semibold line-clamp-1">Compila il form insieme al tuo team</p>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="flex flex-row basis-1/2 justify-end items-center hover:cursor-pointer">
                                <p className="font-primary text-base font-semibold">Aggiungi collaboratori</p>
                                <MdAddCircleOutline size={24} className="text-primary" />
                            </div>
                        </DialogTrigger>
                        {lotto.isFetched && <SearchPeopleDialog idLotto={idLotto} alreadyTaggedUsers={lotto.data.collaborators.map(person => person.user) ?? []} />}
                    </Dialog>
                </div>
                {/* Persone aggiunte */}
                <div className="flex flex-wrap gap-2">
                    {
                        lotto.isFetched &&
                        lotto.data?.collaborators.map((person, index) => {
                            return <Account key={index} onClick={() => deletePerson.mutate(person.id)} className="bg-accent_light" close variant='selected' name={person.user.name} surname={person.user.surname} />
                        })
                    }
                </div>
                <Separator className="bg-surface_dark" />
            </div>
            {/* Compilation Mode */}
            <div className="flex flex-col gap-4">
                <div>
                    <p className="text-primary font-primary text-base font-semibold">Modalità di compilazione:</p>
                    <p className="text-black_dim font-primary text-base font-semibold">Inserisci le informazioni necessarie e verifica i dati inseriti automaticamente</p>
                </div>
                <div>
                    {chainType !== "Rivenditore" && <Button onClick={() => setManuale("MANUALE")} className={selected === "MANUALE" ? "bg-opacity-10 bg-accent border-accent" : ""} variant="compilation">Inserzione manuale</Button>}
                    {chainType !== "Ente Certificatore" && <Button onClick={() => setManuale("SENSORI")} className={selected === "SENSORI" ? "bg-opacity-10 bg-accent border-accent" : ""} variant="compilation">Raccolta Automatica</Button>}
                </div>
            </div>
        </div>
    )
};

export default PeopleForm;