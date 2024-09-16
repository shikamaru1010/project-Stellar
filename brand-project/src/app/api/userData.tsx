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

<UserInfo user={user} />;