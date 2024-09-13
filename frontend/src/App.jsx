import Register from "./pages/Auth/Register"
import { Outlet } from "react-router"
function App() {
  return (
    <>
       <main className="py-3">
        <Outlet />
      </main>
    </>
  )
}
export default App
