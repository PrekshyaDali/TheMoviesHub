import { Outlet } from "react-router"
import {ToastContainer} from "react-toastify"
import Navigation from "./pages/Auth/Navigation"
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <>
    <Navigation></Navigation>
    <ToastContainer></ToastContainer>
       <main className="py-3">
        <Outlet />
      </main>
    </>
  )
}
export default App
