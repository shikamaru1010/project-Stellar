import { createBrowserRouter} from "react-router-dom";
import App from "../../App";
import HomePage from "../pages/landingPage";
import ContactPage from "../pages/contactPage";
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
    