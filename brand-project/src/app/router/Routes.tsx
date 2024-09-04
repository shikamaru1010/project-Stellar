import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import HomePage from "../pages/homePage";
import ProductsDashboard from "../components/dashboard/productsDashboard";
import ContactPage from "../pages/contactPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '/home', element: <HomePage />},
            //{path: '', element: <ProductsDashboard />},
            {path: '/contact', element: <ContactPage />},

        ] 
    }
])