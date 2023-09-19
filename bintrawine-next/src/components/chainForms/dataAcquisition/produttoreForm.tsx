import React from "react";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormControl,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProduttoreSchema, ProduttoreSchemaForm } from "@/types/chainTypes";
import { useForm } from 'react-hook-form';
import { cn } from "@/utils";
import { Separator } from "@/components/ui/separator";
import { api } from "@/utils/api";
import Loader from "@/components/loading";

export interface ProduttoreFormProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

type FieldProduttoreType = {
    name: "prodottiVinificazione" | "quantitaVinoOttenuto" | "quantitaVinoRivendicato";
    label: string;
}

const ProduttoreForm = React.forwardRef<HTMLDivElement, ProduttoreFormProps>(
    ({ className }, ref) => {

        const utils = api.useContext()
        const sendProduttoreData = api.produttore.send.useMutation({
            onSuccess() {
                utils.blockChainRouter.invalidate()
            }
        });

        const fields: FieldProduttoreType[] = [
            { name: 'prodottiVinificazione', label: 'Prodotti Vinificazione' },
            { name: 'quantitaVinoOttenuto', label: 'Quantità Vino Ottenuto' },
            { name: 'quantitaVinoRivendicato', label: 'Quantità Vino Rivendicato' }
        ];

        const form = useForm<ProduttoreSchemaForm>({
            resolver: zodResolver(ProduttoreSchema)
        });

        const onSubmit = (data: ProduttoreSchemaForm) => {
            sendProduttoreData.mutate(data)
        }

        return (
            <div className={cn("flex-1 p-7 flex flex-col gap-8", className)}>
                {
                    sendProduttoreData.isLoading && <Loader />
                }
                <div className="">
                    <p className="text-primary font-primary text-xl font-bold">Inserzione Manuale</p>
                </div>
                <div className="flex-1 flex flex-col">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex-1 flex flex-col">
                            <div className="flex-1 flex flex-col gap-4">
                                {
                                    fields.map((fieldItem, index) => (
                                        <FormField
                                            key={index}
                                            control={form.control}
                                            name={fieldItem.name}
                                            render={({ field }) => (
                                                <FormItem className="flex flex-col gap-4">
                                                    <FormLabel className="text-primary font-primary text-xl font-normal">{fieldItem.label}</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder={fieldItem.label} type="text" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                    <Separator className="bg-surface_dark" />
                                                </FormItem>
                                            )}
                                        />
                                    ))
                                }
                            </div>
                            <Button className="bg-accent w-1/3 self-end flex justify-center items-center" type="submit">Invia</Button>
                        </form>
                    </Form>
                </div>
            </div>
        )
    });

export default ProduttoreForm;