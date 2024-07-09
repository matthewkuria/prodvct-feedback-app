"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from "next/link"
import { Input } from "@/app/components/ui/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form"
import { Button } from "../../components/ui/button"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  createUserWithEmailAndPassword,
  getAuth, updateProfile
} from "firebase/auth";

const FormSchema = z.object({
  displayName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  emailAddress: z.string().email(),
  password: z.string().min(4),
})

export function SignUpForm() {
  const auth = getAuth();
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("")
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          emailAddress: "",
            password: "",
            displayName: ""
        },
      })
const handleSubmit = async(values: z.infer<typeof FormSchema>) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
       await updateProfile(userCredential.user, { displayName });
      console.log("Sign Up successful")
      router.push("/login"); // Redirect to login
    } catch (error: any) {
      setError(getErrorMessage(error.code))
      console.error("Error signing in:",error.code);
    }    
    console.log(values) 
    
  }
   // Function to map Firebase error codes to user-friendly messages
  const getErrorMessage = (code: any) => {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'Email is already in use.';
      case 'auth/invalid-email':
        return 'Invalid email address.';
      case 'auth/weak-password':
        return 'Password is too weak.';
      default:
        return 'An error occurred. Please try again.';
    }
  };
  return (
    <main className="flex-col mx-auto mt-20">
      <h1 className="text-3xl text-center">Sign Up</h1>
       {error && <div className="text-red-500 text-center">{error }</div >}
      <div className="flex justify-center items-center max-w-lg mx-auto">
          <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="w-2/3 p-4 rounded-md space-y-4 bg-slate-100">
          <FormField
            control={form.control}
            name="displayName"
            render={({ field }) => (
            <FormItem>             
                <FormControl>
                  <Input placeholder="Username"
                    value={field.value}
                    onChange={(e) => {
                        // call field.onchange handler
                        field.onChange(e);
                        setDisplayName(e.target.value)
                      }}
                 />
                </FormControl>             
                <FormMessage />
            </FormItem>
            )}
            />            
            <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email"
                    value={field.value}
                    onChange={(e) => {
                      field.onChange(e);
                      setEmail(e.target.value)
                    }}
                  />
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
                  <Input placeholder="Password"
                    type="password"
                    value={field.value}
                    onChange={(e) => {
                      field.onChange(e);
                      setPassword(e.target.value)
                    }}
                  />
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
