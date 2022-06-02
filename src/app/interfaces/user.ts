export interface User {
    uid: string;
    email: string;
    roles: Roles
 }

 export interface Roles {
     business: boolean,
     deliveryman: boolean,
     incomes: boolean,
     orders: boolean
 }
