import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
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
        { name: 'email', type: 'email', label: 'Email', message: 'Digit your email' },
        { name: 'password', type: 'password', label: 'Password', message: 'Digit your password' }
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
        <div className='p-5 mt-5 flex flex-col gap-7'>
            <h1 className='font-bold text-center text-4xl'>BinTraWine Login</h1>
            <div className='flex flex-col gap-7 w-3/5 self-center'>
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
                                            <FormLabel className='text-xl'>{fielditem.label}</FormLabel>
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
                        <Button className='w-1/3 h-10 self-center' type="submit">
                            Sign In
                        </Button>
                    </form>
                </Form>
                <p className='text-center text-xl'>Don't you have an account? <Link href="/auth/sign-up" className='hover:underline font-bold'>Sign up</Link></p>
            </div>
            {credentialError && (
                <div className="w-3/5 self-center h-10 rounded-md bg-red-200 py-2 px-4 text-center text-red-600">
                    {'Either email or password are wrong'}
                </div>
            )}
        </div>
    );
}

export default SignIn;