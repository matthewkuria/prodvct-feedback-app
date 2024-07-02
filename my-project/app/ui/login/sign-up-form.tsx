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
    <main className="flex-col justify-center items-center mx-auto max-w-md">
      <h1 className="text-3xl">Sign Up</h1>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
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
        <Button className="" type="submit">Submit</Button>
      </form>
    </Form>
    </main>
  )
}
