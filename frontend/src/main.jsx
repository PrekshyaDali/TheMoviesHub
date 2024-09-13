import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/store.js'
import { DarkModeProvider } from './context/DarkModeContext.jsx'
import { Provider } from 'react-redux'
import {Route, RouterProvider, createRoutesFromElements} from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import AppRouter from './router/Router.jsx'

//Auth


//Restricted




createRoot(document.getElementById('root')).render(
 <AppRouter store = {store}>
    <DarkModeProvider>
     <App/>
   </DarkModeProvider>
 </AppRouter>
)
