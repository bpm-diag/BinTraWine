import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormDescription,
    FormMessage,
    FormControl
} from '@/components/ui/form';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { api } from '@/utils/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import SidebarLogin from '@/components/sidebarLogin';
import { Role } from '@prisma/client';
import { transformRole } from '@/utils/utilsFunctions';

type FieldType = {
    name: "name" | "surname" | "email" | "password" | "cantina";
    type: "text" | "email" | "password";
    label: string;
    message: string;
    design: string;
}

const SignUpPage = () => {

    const router = useRouter();
    const createUser = api.users.create.useMutation();

    const fields: FieldType[] = [
        { name: 'name', type: 'text', label: 'Nome', message: '', design: 'row-start-1 col-start-1 col-span-1' },
        { name: 'surname', type: 'text', label: 'Cognome', message: '', design: 'row-start-2 col-start-1 col-span-1' },
        { name: 'email', type: 'email', label: 'Inserisci la tua e-mail', message: '', design: 'row-start-3 col-start-1 col-span-1' },
        { name: 'password', type: 'password', label: 'Imposta una password', message: '', design: 'row-start-4 col-start-1 col-span-1' },
        { name: 'cantina', type: 'text', label: 'Nome cantina', message: '', design: 'row-start-1 col-start-2 col-span-1' }
    ];
    const items = [
        {
            id: "agronomo",
            label: "Agronomo",
        },
        {
            id: "viticoltore",
            label: "Viticoltore",
        },
        {
            id: "produttore",
            label: "Produttore",
        },
        {
            id: "imbottigliatore",
            label: "Imbottigliatore",
        },
        {
            id: "distributore",
            label: "Distributore",
        },
        {
            id: "rivenditore",
            label: "Rivenditore",
        },
        {
            id: "ente_certificatore",
            label: "Ente Certificatore",
        },
    ] as const

    const userSchemaForm = z.object({
        name: z.string().min(1, { message: "Il nome è richiesto e deve avere almeno un carattere" }).max(255),
        surname: z.string().min(1, { message: "Il cognome è richiesto e deve avere almeno un carattere" }).max(255),
        email: z.string().email({ message: "La mail è richiesta e deve essere valida" }),
        password: z.string().min(5, { message: "La password deve avere almeno 5 caratteri" }).max(255),
        cantina: z.string().min(3, { message: "Il nome della cantina è da specificare e deve avere almeno 3 caratteri" }).max(255),
        items: z.array(z.string()).refine((value) => value.some((item) => item), {
            message: "You have to select at least one item"
        }),
        conditions: z.boolean().default(false)
            .refine((data) => data, {
                message: "Le condizione devono essere accettate",
            })
    });

    type UserSchemaForm = z.infer<typeof userSchemaForm>;

    const form = useForm<UserSchemaForm>({
        resolver: zodResolver(userSchemaForm),
        defaultValues: {
            items: ["agronomo"],
            conditions: true,
        },
    });

    const onSubmit = (data: UserSchemaForm) => {
        let roles: Role[] = data.items.map((item) => transformRole(item));
        createUser.mutate({
            data: {
                name: data.name,
                surname: data.surname,
                email: data.email,
                cellar: data.cantina,
                roles: roles,
                hashedPassword: data.password
            }
        });
        router.push('/auth/sign-in');
    }

    return (
        <div className='flex flex-row h-screen'>
            <SidebarLogin className="flex flex-col items-start gap-14 p-16 bg-primary w-1/3" />
            <div className='flex flex-col gap-20 p-16 w-full'>
                <div className='flex flex-row justify-between items-start'>
                    <div className='flex flex-col'>
                        <h1 className='font-primary font-normal text-3xl'>Registrati</h1>
                        <p className='font-primary font-normal text-sm'>Imposta le tue credenziali</p>
                    </div>
                    <div>
                        <p className='font-primary font-normal text-base'>Hai già un account? <Link href="/auth/sign-in" className='underline hover:cursor-pointer text-accent'>Accedi</Link></p>
                    </div>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='h-full'>
                        <div className='flex flex-col justify-between h-full'>
                            <div className="grid grid-cols-2 grid-rows-4 gap-9">
                                {
                                    fields.map((fielditem, index) => (
                                        <FormField
                                            key={index}
                                            defaultValue=''
                                            control={form.control}
                                            name={fielditem.name}
                                            render={({ field }) => (
                                                <FormItem className={`bg row-span-1 ${fielditem.design}`}>
                                                    <FormLabel className='text-primary font-normal font-primary text-xl'>{fielditem.label}</FormLabel>
                                                    <FormControl>
                                                        <Input type={fielditem.type} placeholder={fielditem.label} {...field} />
                                                    </FormControl>
                                                    <FormDescription>
                                                        {fielditem.message}
                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    ))
                                }
                                <FormField
                                    control={form.control}
                                    name="items"
                                    render={() => (
                                        <FormItem className='row-span-3 row-start-2 col-start-2 col-span-1 flex flex-col justify-between'>
                                            <FormLabel className="text-primary font-normal text-xl font-primary">Seleziona uno o più ruoli</FormLabel>
                                            {items.map((item) => (
                                                <FormField
                                                    key={item.id}
                                                    control={form.control}
                                                    name="items"
                                                    render={({ field }) => {
                                                        return (
                                                            <FormItem
                                                                key={item.id}
                                                                className="flex flex-row items-center space-x-3 space-y-0"
                                                            >
                                                                <FormControl>
                                                                    <Checkbox
                                                                        checked={field.value?.includes(item.id)}
                                                                        onCheckedChange={(checked) => {
                                                                            return checked
                                                                                ? field.onChange([...field.value, item.id])
                                                                                : field.onChange(
                                                                                    field.value?.filter(
                                                                                        (value) => value !== item.id
                                                                                    )
                                                                                )
                                                                        }}
                                                                    />
                                                                </FormControl>
                                                                <FormLabel className="font-normal text-primary font-primary text-xl">
                                                                    {item.label}
                                                                </FormLabel>
                                                            </FormItem>
                                                        )
                                                    }}
                                                />
                                            ))}
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className='flex flex-row justify-between'>
                                <FormField
                                    control={form.control}
                                    name="conditions"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col justify-between">
                                            <FormLabel className='text-primary text-sm font-primary'>Privacy policy</FormLabel>
                                            <div className='flex flex-row items-center space-x-3 space-y-0'>
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel className='font-normal text-primary font-primary text-base'>
                                                        Ho letto e accetto la <span className='text-accent underline hover:cursor-pointer'>Privacy Policy</span>
                                                    </FormLabel>
                                                </div>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button className='justify-center items-center px-4 py-2 rounded-sm bg-accent font-primary' type="submit">Conferma</Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </div >
    );
}

SignUpPage.getLayout = (page) => <>{page}</>
export default SignUpPage;