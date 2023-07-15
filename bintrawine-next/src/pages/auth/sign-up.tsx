import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormDescription,
    FormMessage,
    FormControl
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { api } from '@/utils/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';

type FieldType = {
    name: "name" | "surname" | "email" | "password" | "confirmPassword";
    type: "text" | "email" | "password";
    label: string;
    message: string;
}

const SignUpPage = () => {

    const router = useRouter();
    const createUser = api.users.create.useMutation();

    const fields: FieldType[] = [
        { name: 'name', type: 'text', label: 'Name', message: 'Digit your name' },
        { name: 'surname', type: 'text', label: 'Surname', message: 'Digit your surname' },
        { name: 'email', type: 'email', label: 'Email', message: 'Digit your email' },
        { name: 'password', type: 'password', label: 'Password', message: 'Digit your password' },
        { name: 'confirmPassword', type: 'password', label: 'Confirm Password', message: 'Digit your again' }
    ];

    const userSchemaForm = z.object({
        name: z.string().min(1, { message: "name is required and must have at least 3 characters" }).max(255),
        surname: z.string().min(1, { message: "name is required and must have at least 3 characters" }).max(255),
        email: z.string().email({ message: "email is required and must be a valid email" }),
        password: z.string().min(1, { message: "Password must be atleast 1 characters" }).max(255),
        confirmPassword: z.string().min(1, { message: "Confirm Password is required" }).max(255)
    }).
        refine(data => data.password === data.confirmPassword, {
            path: ["confirmPassword"],
            message: 'Password and Confirm Password must be the same',
        });

    type UserSchemaForm = z.infer<typeof userSchemaForm>;

    const form = useForm<UserSchemaForm>({
        resolver: zodResolver(userSchemaForm)
    });

    const onSubmit = (data: UserSchemaForm) => {
        createUser.mutate({
            data: {
                name: data.name,
                surname: data.surname,
                email: data.email,
                hashedPassword: data.password
            }
        });
        router.push('/auth/sign-in');

    }

    return (
        <div className='p-5 mt-5 flex flex-col gap-7'>
            <h1 className='font-bold text-center text-4xl'>BinTraWine Sign Up</h1>
            <div className='w-3/5 self-center'>
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
                        <Button className='w-1/3 h-10 self-center' type="submit">Sign Up</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}

export default SignUpPage;