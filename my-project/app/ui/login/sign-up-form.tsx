"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from "next/link"
import { Input } from "@/app/components/ui/input"
import { toast } from "@/app/components/ui/use-toast"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form"
import { Button } from "../../components/ui/button"
import { useForm } from "react-hook-form"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from "react"

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
  const [error, setError] = useState(null);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })
const handleSignup = async (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Update the user's profile with the username
      await updateProfile(user, {
        displayName: username,
      });

      console.log('User signed up: ', user);
      // Redirect or show success message
    } catch (error:any) {
      setError(error.message);
      console.error('Error: ', error.code, error.message);
    }
  };
  return (
    <main className="flex-col mx-auto mt-20">
      <h1 className="text-3xl text-center">Sign Up</h1>
      <div className="flex justify-center items-center max-w-lg mx-auto">
          <Form {...form}>
        <form onSubmit={handleSignup} className="w-2/3 p-4 rounded-md space-y-4 bg-slate-100">
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
            <Button className="w-full bg-blue-500 text-white hover:bg-blue-400" type="submit">Sign Up</Button>
          <p className="">Already have an account?<span className="hover:underline text-blue-500"><Link href="/login">Log in</Link></span></p>
        </form>
      </Form>
      </div>
    </main>
  )
}
