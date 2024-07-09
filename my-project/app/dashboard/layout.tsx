import NavBar from "../ui/navbar/navbar"
import NavMenu from "../ui/navbar/navmenu"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="">
        <NavBar />
        <NavMenu />
      </nav>
     
      
 
      {children}
    </section>
  )
}