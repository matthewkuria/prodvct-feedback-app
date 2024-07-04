"use client"
import { LoginForm } from "../ui/login/login-form"
import { usePathname } from "next/navigation"

const Page = () => {
    const pathname = usePathname()
    return (
        <LoginForm/>
    )
}
export default Page