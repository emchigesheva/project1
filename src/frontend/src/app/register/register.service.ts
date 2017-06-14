import {User} from '../user';
 
export class Authentication{
 
    private data: User[] = [
        { first_name:"Lev", last_name:"Kleyman", email:"smarttty@yandex.ru", password:"12345"}
    ];
    getData(): User[] {
         
        return this.data;
    }
    addData(first_name: string, last_name: string, email: string, password: string){
         
        this.data.push(new User(first_name, last_name,email,password));
    }
}
