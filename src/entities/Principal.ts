import { Role } from "./Role";

export interface Principal {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    role?: Role;
}