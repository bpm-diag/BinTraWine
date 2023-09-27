import React, { useState } from "react";
import { Input } from '@/components/ui/input';
import { cn } from "@/utils";
import Account from "@/components/account";
import { MdPersonAddAlt1 } from "react-icons/md";
import * as DialogPrimitive from "@radix-ui/react-dialog"
import {
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { api } from "@/utils/api";
import { User } from "@prisma/client";
import Loader from "@/components/loading";

export interface SearchPeopleDialogProps
    extends React.HTMLAttributes<HTMLDivElement> {
    idLotto: number
}

const checkStringMatching = (name: string, surname: string, secondString: string): boolean => {
    if ((name + " " + surname).includes(secondString)) return true
    if (secondString.includes(name) || secondString.includes(surname)) return true
    return false
}

const filteredPeople = (searchedString: string, allPeople: User[]): User[] => {
    if (searchedString === "") return []
    const availablePeople: User[] = []
    allPeople.map(currentUser => {
        if (checkStringMatching(currentUser.name.toLowerCase(), currentUser.surname.toLowerCase(), searchedString.toLowerCase())) availablePeople.push(currentUser)
    })
    return availablePeople
}

const SearchPeopleDialog = React.forwardRef<HTMLDivElement, SearchPeopleDialogProps>(
    ({ className, idLotto }, ref) => {

        const utils = api.useContext()
        const addPerson = api.lotto.addPerson.useMutation({
            onSuccess() {
                utils.lotto.getLotto.invalidate()
                utils.lotto.getAllLotti.invalidate()
            }
        })

        const [peopleToShow, setPeoopleToShow] = useState<User[]>([])
        const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined)
        const allUsers = api.users.getAllUsers.useQuery()

        return (
            <DialogContent className={cn("sm:max-w-[425px]", className)}>
                <DialogHeader>
                    <DialogTitle>
                        <p className="text-xl font-bold text-primary">Aggiungi persone alla filiera</p>
                    </DialogTitle>
                </DialogHeader>
                {allUsers.isLoading && <Loader />}
                {allUsers.isError && <p>Errore nel caricamento, provare a ricaricare</p>}
                {allUsers.isFetched &&
                    <div className="flex flex-col gap-4 py-4">
                        <Input onChange={(e) => setPeoopleToShow(filteredPeople(e.target.value, allUsers.data!))} placeholder="Nome e Cognome" type="text" />
                        <div className="flex flex-col gap-2">
                            {
                                peopleToShow.map(person => {
                                    return <Account onClick={() => setSelectedUser(person)} className={`hover:cursor-pointer hover:bg-accent ${(selectedUser && selectedUser.id === person.id) ? "bg-accent" : ""}`} icon={false} variant='selected' name={person.name} surname={person.surname} />
                                })
                            }
                        </div>
                    </div>
                }
                <DialogFooter>
                    <DialogPrimitive.Close>
                        <Button disabled={!selectedUser} onClick={() => addPerson.mutate({ user: selectedUser!.id, lottoId: idLotto })} className="bg-accent flex flex-row justify-center items-center">
                            Aggiungi
                            <MdPersonAddAlt1 size={20} />
                        </Button>
                    </DialogPrimitive.Close>
                </DialogFooter>
            </DialogContent>
        )
    });

export default SearchPeopleDialog;