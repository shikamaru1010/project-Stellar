import { createBrowserRouter} from "react-router-dom";
import App from "../../App";
import HomePage from "../pages/landingPage";
import ContactPage from "../pages/contactPage";
import CollectionPage from "../pages/collectionPage";
import ProductDetailedPage from "../components/product/details/productDetailedPage";



const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: '/home', element: <HomePage />},
            {path: '/collection', element: <CollectionPage />},
            {path: '/collection/:id', element:<ProductDetailedPage />},
            {path: '/contact', element: <ContactPage />},
            
        ] 
    }
]

export const router = createBrowserRouter(routes);
    