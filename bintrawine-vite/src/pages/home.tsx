import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import Button from '@/components/button/button';
import { useForm } from 'react-hook-form';
import Input from '@/components/input/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/form/form';
import { agronomoSchema, Agronomo } from '@/types/agronomo';

const Home = () => {

  const form = useForm<Agronomo>({
    resolver: zodResolver(agronomoSchema),
    defaultValues: {
      token: "",
    },
  })

  const onSubmit = (data: Agronomo) => {
    console.log(data);
  }

  return (
    <div className="grid-in-main rounded-tl-3xl rounded-bl-3xl">
      <div className="flex flex-col w-full h-full rounded-tl-3xl rounded-bl-3xl bg-white">
        <p className="p-4 text-center text-2xl font-bold">Agronomo</p>
        <div className="flex-1 rounded-bl-3xl bg-gray-700">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="token"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Token</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      Insert the Agronomo Token
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
};

export default Home;
