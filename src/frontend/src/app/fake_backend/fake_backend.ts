import {InMemoryDbService} from "angular-in-memory-web-api"

export class US implements InMemoryDbService{
    createDb(){
        let us = [
            {email: 'smarttty@yandex.ru', password: '12345'}
        ];
        return{us};
    }
}