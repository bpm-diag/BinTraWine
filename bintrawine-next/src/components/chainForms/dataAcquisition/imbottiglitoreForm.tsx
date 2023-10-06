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
import { useForm } from 'react-hook-form';
import { cn } from "@/utils";
import { Separator } from "@/components/ui/separator";
import { ImbottigliatoreSchema, ImbottigliatoreSchemaForm } from "@/types/chainTypes";
import { api } from "@/utils/api";
import Loader from "@/components/loading";

export interface ImbottigliatoreFormProps
    extends React.HTMLAttributes<HTMLDivElement> {
    idLotto: number
}

type FieldProduttoreType = {
    name: "presenzaSolfiti" | "presenzaAllergeni" | "localitaUve" | "codiceAbarre";
    label: string;
}

const ImbottigliatoreForm = (props: ImbottigliatoreFormProps) => {
        const { className, idLotto } = props;
        const utils = api.useContext()
        const sendImbottigliatoreData = api.imbottigliatore.send.useMutation({
            onSuccess() {
                utils.blockChainRouter.invalidate()
            }
        });

        const fields: FieldProduttoreType[] = [
            { name: 'presenzaSolfiti', label: 'Presenza Solfiti' },
            { name: 'presenzaAllergeni', label: 'Presenza Allergeni' },
            { name: 'localitaUve', label: 'Località Uve' },
            { name: 'codiceAbarre', label: 'Codice a Barre' }
        ];

        const form = useForm<ImbottigliatoreSchemaForm>({
            resolver: zodResolver(ImbottigliatoreSchema)
        });

        const onSubmit = (data: ImbottigliatoreSchemaForm) => {
            sendImbottigliatoreData.mutate(data)
        }

        return (
            <div className={cn("flex-1 p-7 flex flex-col gap-8", className)}>
                {
                    sendImbottigliatoreData.isLoading && <Loader />
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
    };

export default ImbottigliatoreForm;