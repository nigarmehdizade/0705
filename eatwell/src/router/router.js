import {createBrowserRouter} from "react-router";
import Home from "../pages/Home";
import Admin from "../pages/admin/Admin";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: "/",
                Component: Home
            }
        ]
    },
    {
        path: "/admin",
        Component: Admin
    },
    {
      
    }
])