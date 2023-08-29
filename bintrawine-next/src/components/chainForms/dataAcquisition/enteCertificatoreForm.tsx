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
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { cn } from "@/utils";
import { Separator } from "@/components/ui/separator";

export interface AgronomoFormProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

type FieldEnteCertificatoreType = {
    name: "validazione" | "certificazione";
    label: string;
}

const EnteCertificatoreForm = React.forwardRef<HTMLDivElement, AgronomoFormProps>(
    ({ className }, ref) => {

        const fields: FieldEnteCertificatoreType[] = [
            { name: 'validazione', label: 'Validazione' },
            { name: 'certificazione', label: 'Certificazione' }
        ];

        const enteCertificatoreSchema = z.object({
            validazione: z.string().min(1, {
                message: "Dato obbligatorio",
            }),
            certificazione: z.string().min(1, {
                message: "Dato obbligatorio",
            }),
        });
        type EnteCertificatoreSchemaForm = z.infer<typeof enteCertificatoreSchema>;

        const form = useForm<EnteCertificatoreSchemaForm>({
            resolver: zodResolver(enteCertificatoreSchema)
        });

        const onSubmit = (data: EnteCertificatoreSchemaForm) => {
            console.log(data);
        }

        return (
            <div className={cn("flex-1 p-7 flex flex-col gap-8", className)}>
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

export default EnteCertificatoreForm;