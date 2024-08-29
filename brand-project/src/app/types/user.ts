interface Adress{
    street: string,
    city: string,
    country: string
}

export interface User {
    firstName: string,
    lastName: string,
    email: string,
    adress: Adress
}