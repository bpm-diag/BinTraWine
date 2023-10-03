import React from "react";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormControl,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { cn } from "@/utils";
import { Separator } from "@/components/ui/separator";
import { ViticoltoreSchema, ViticoltoreSchemaForm } from "@/types/chainTypes";
import { api } from "@/utils/api";
import Loader from "@/components/loading";

export interface ViticoltoreFormProps
    extends React.HTMLAttributes<HTMLDivElement> {
    idLotto: number
}

type FieldViticoltoreType = {
    name: "dataRaccolta" |
    "datiForniture" |
    "destinazioneUva" |
    "nomeProdotto" |
    "prezzo" |
    "quantitaVendita" |
    "nomeClienteVendita" |
    "dataVendita";
    label: string;
}

const ViticoltoreForm = React.forwardRef<HTMLDivElement, ViticoltoreFormProps>(
    ({ className, idLotto }, ref) => {

        const utils = api.useContext()
        const sendViticoltoreData = api.viticoltore.send.useMutation({
            onSuccess() {
                utils.blockChainRouter.invalidate()
            }
        });

        const fields: FieldViticoltoreType[] = [
            { name: 'dataRaccolta', label: 'Data Raccolta' },
            { name: 'datiForniture', label: 'Dati Forniture' },
            { name: 'destinazioneUva', label: 'Destinazione Uva' },
            { name: 'nomeProdotto', label: 'Nome Prodotto' },
            { name: 'prezzo', label: 'Prezzo' },
            { name: 'quantitaVendita', label: 'Quantità Vendita' },
            { name: 'nomeClienteVendita', label: 'Nome Cliente Vendita' },
            { name: 'dataVendita', label: 'Data Vendita' }
        ];

        const form = useForm<ViticoltoreSchemaForm>({
            resolver: zodResolver(ViticoltoreSchema),
            defaultValues: {
                viticoltoreAddress: false
            }
        });

        const onSubmit = (data: ViticoltoreSchemaForm) => {
            sendViticoltoreData.mutate(data);
        }

        return (
            <div className={cn("flex-1 p-7 flex flex-col gap-8", className)}>
                {
                    sendViticoltoreData.isLoading && <Loader />
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
                            <div>
                                <FormField
                                    control={form.control}
                                    name="viticoltoreAddress"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col justify-between">
                                            <FormLabel className='text-primary text-sm font-primary'>Visibilità Produttore</FormLabel>
                                            <div className='flex flex-row items-center space-x-3 space-y-0'>
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel className='font-normal text-primary font-primary text-base'>
                                                        Mostrare dati al <span className='text-accent'>Produttore</span>
                                                    </FormLabel>
                                                </div>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button className="bg-accent w-1/3 self-end flex justify-center items-center" type="submit">Invia</Button>
                        </form>
                    </Form>
                </div>
            </div>
        )
    });

export default ViticoltoreForm;