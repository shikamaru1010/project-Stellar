import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../../App";
import HomePage from "../pages/landingPage";
import ProductsDashboard from "../components/dashboard/productsDashboard";
import ContactPage from "../pages/contactPage";
import { productsData } from "../types/products";
import CollectionPage from "../pages/collectionPage";


const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: '/home', element: <HomePage />},
            {path: '/collection', element: <CollectionPage />},
            {path: '/contact', element: <ContactPage />},

        ] 
    }
]

export const router = createBrowserRouter(routes);