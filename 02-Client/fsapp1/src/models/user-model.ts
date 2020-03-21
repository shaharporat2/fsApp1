import { throws } from "assert";

export class UserModel{

    public first_name: string;
    public last_name: string;
    public user_name: string;
    public password: string;
    public isAdmin: boolean;

    public constructor(first_name?: string, last_name? : string, user_name?: string, password?: string, isAdmin?: boolean){
        this.first_name = first_name;
        this.last_name = last_name;
        this.user_name = user_name;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}