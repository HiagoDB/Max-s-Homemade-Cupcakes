import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"


export default function AppLayout() {
  return (
    <>

      <Header />
      <Outlet />
      <Footer />

    </>
  )
}

