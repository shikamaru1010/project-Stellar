import { createBrowserRouter} from "react-router-dom";
import App from "../../App";
import HomePage from "../pages/landingPage";
import ContactPage from "../pages/contactPage";
import CollectionPage from "../pages/collectionPage";
import ProductDetailedPage from "../components/product/details/productDetailedPage";
import LogIn from "../layout/login/logIn";
import SignUp from "../layout/signUp/signUp";
import UserInfo from "../layout/userinfo/userInfo";
import { User } from "../types/user";

const user: User = {
    firstName: 'Ratko',
    lastName: 'Sisovic',
    email: 'ralesisko@gmail.com',
    adress: {
      street: 'Sisovici 7',
      city: 'Cajetina',
      country: 'Serbia',
    }
  };


const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: '/home', element: <HomePage />},
            {path: '/collection', element: <CollectionPage />},
            {path: '/collection/:id', element:<ProductDetailedPage />},
            {path: '/contact', element: <ContactPage />},
            {path: '/Login',element: <LogIn />},
            {path: '/Signup',element: <SignUp />},
            {path: '/UserInfo',element: <UserInfo user={user}/>}
            
        ] 
    }
]

export const router = createBrowserRouter(routes);
    