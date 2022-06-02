export interface User {
    uid: string;
    email: string;
    roles: Roles
    city: string;
}

export interface Roles {
    business: boolean,
    deliveryman: boolean,
    incomes: boolean,
    orders: boolean
}


export interface UserAndRoles {
    user: User;
    roles: Roles;
}