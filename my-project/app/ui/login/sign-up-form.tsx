"use client"

import { zodResolver } from "@hookform/resolvers/zod"

import { z } from "zod"


import { Input } from "@/app/components/ui/input"
import { toast } from "@/app/components/ui/use-toast"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form"
import { Button } from "../../components/ui/button"
import { useForm } from "react-hook-form"


const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
   email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email.")
    .refine((e) => e === "abcd@fg.com", "This email is not in our database"),
   password: z.string().min(4),
})

export function SignUpForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <main className="flex-col mx-auto mt-20">
      <h1 className="text-3xl text-center">Sign Up</h1>
      <div className="flex justify-center items-center max-w-lg mx-auto">
          <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 p-4 rounded-md space-y-4 bg-slate-100">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>             
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>             
                <FormMessage />
              </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>              
                <FormMessage />
              </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>              
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full bg-blue-500 text-white" type="submit">Sign Up</Button>
          <p className="">Already have an account?<span><a href="">Log in</a></span></p>
        </form>
      </Form>
      </div>
    </main>
  )
}
