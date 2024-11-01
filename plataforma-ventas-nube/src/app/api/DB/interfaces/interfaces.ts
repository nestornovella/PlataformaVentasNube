import { UUID } from "crypto";



export interface User{
    id:UUID;
    name:string;
    email:string;
    password:string;
    avatar:string;
    active:boolean;
}