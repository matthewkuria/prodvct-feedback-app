"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { Input } from "@/app/components/ui/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form"
import { Button } from "../../components/ui/button"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/app/firebaseConfig"
import { GridLoader } from "react-spinners"


const FormSchema = z.object({ 
  emailAddress: z.string().email(), 
  password: z.string().min(4),
})

export function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          emailAddress: "",
          password:"",
        },
      })
        //  Define a submit handler.
  const handleSubmit = async(values: z.infer<typeof FormSchema>) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
        if (loading) {
          return <GridLoader color="#e21ba6" /> ; // Show spinner while loading
        }
      console.log("Sign in successful")     
      router.push("/dashboard"); // Redirect to home or dashboard page
    } catch (error: any) {
      setError(getErrorMessage(error.code))
      console.error("Error signing in:",error.code);
    }  
    finally {
      setLoading(false);
    }
    // console.log(values) 
    
  }
   // Function to map Firebase error codes to user-friendly messages
  const getErrorMessage = (code: any) => {
    switch (code) {
      case 'auth/invalid-credential':
        return 'Incorrect user name or password. Please try again.';     
      default:
        return 'An error occurred. Please try again.';
    }
  };

  return (
    <main className="flex-col mx-auto mt-20">
      <h1 className="text-3xl text-center">Login Form</h1>
      {error && <div className="text-red-500 text-center">{error }</div >}
      <div className="flex justify-center items-center max-w-lg mx-auto">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="w-2/3 p-4 rounded-md space-y-4 bg-slate-100">
                                
            <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email"
                    value={field.value}
                      onChange={(e) => {
                        // call field.onchange handler
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
                    value={field.value}
                    type="password"
                    onChange={(e) => {
                      // call field.onchange handler
                      field.onChange(e);
                      setPassword(e.target.value)
                    }}
                  />
                </FormControl>              
                <FormMessage />
              </FormItem>
            )}
          />
            <Button className="w-full bg-blue-500 text-white hover:bg-blue-400" type="submit">Login</Button>
          <p className="">Do not have an account?<span className="hover:underline text-blue-500"><Link href="/login/sign-up">Sign Up</Link></span></p>
        </form>
      </Form>
      </div>
    </main>
  )
}
