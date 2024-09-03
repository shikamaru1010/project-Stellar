import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import HomePage from "../pages/homePage";
import CollectionPage from "../pages/collectionPage";
import ContactPage from "../pages/contactPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'home', element: <HomePage />},
            {path: 'collection', element: <CollectionPage />},
            {path: '/contact', element: <ContactPage />},
        ] 
    }
])