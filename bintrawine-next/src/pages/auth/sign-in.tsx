import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import SidebarLogin from '@/components/sidebarLogin';
import Link from 'next/link';
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormDescription,
    FormMessage,
    FormControl
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

type FieldLoginType = {
    name: "email" | "password";
    type: "email" | "password";
    label: string;
    message: string;
}

const SignIn = () => {

    const [credentialError, setCredentialError] = useState<boolean>(false)
    const router = useRouter();

    const fields: FieldLoginType[] = [
        { name: 'email', type: 'email', label: 'Inserisci la tua e-mail', message: '' },
        { name: 'password', type: 'password', label: 'Inserisci la tua password', message: '' }
    ];

    const userSchemaLogin = z.object({
        email: z.string().email({ message: "email is required and must be a valid email" }),
        password: z.string().min(1, { message: "Password must be atleast 1 characters" }).max(255)
    });

    type UserLogin = z.infer<typeof userSchemaLogin>;

    const form = useForm<UserLogin>({
        resolver: zodResolver(userSchemaLogin)
    });

    const onSubmit = async (data: UserLogin) => {
        setCredentialError(false)
        await signIn('credentials', { redirect: false, email: data.email, password: data.password })
            .then((response) => {
                if (response?.ok) {
                    setCredentialError(false)
                    router.push('/');
                } else {
                    // handle error
                    setCredentialError(true)
                }
            })
            .catch((error) => {
                console.log("error", error);
            })
    }

    return (
        <div className='flex flex-row h-screen'>
            <SidebarLogin className="flex flex-col items-start gap-14 p-16 bg-primary w-1/3" />
            <div className='flex flex-col gap-20 p-16 w-full'>
                <div className='flex flex-col'>
                    <h1 className='font-primary font-normal text-3xl'>Accedi</h1>
                    <p className='font-primary font-normal text-sm'>Inserisci le tue credenziali</p>
                </div>
                <div className='flex flex-col gap-8 w-1/2'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8">
                            {
                                fields.map((fielditem, index) => (
                                    <FormField
                                        key={index}
                                        defaultValue=''
                                        control={form.control}
                                        name={fielditem.name}
                                        render={({ field }) => (
                                            <FormItem className='bg'>
                                                <FormLabel className='font-primary font-normal text-sm text-primary'>{fielditem.label}</FormLabel>
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
                            <Button className='py-2 px-4 w-full h-10 rounded-sm self-center font-primary bg-accent' type="submit">
                                Login
                            </Button>
                        </form>
                    </Form>
                    <p className='text-center font-primary text-base'>Non hai un account? <Link href="/auth/sign-up" className='underline hover:cursor-pointer text-accent'>Registrati</Link></p>
                </div>
            </div>
            {credentialError && (
                <div className="w-3/5 self-center h-10 rounded-md bg-red-200 py-2 px-4 text-center text-red-600">
                    {'Either email or password are wrong'}
                </div>
            )}
        </div>
    );
}

SignIn.getLayout = (page) => <>{page}</>
export default SignIn;