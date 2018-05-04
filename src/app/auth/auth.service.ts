import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const linkerhttpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
};

const imhttpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

interface User {
    phone: number;
    imid: string;
    password: string;
    token: string;
}

interface ImUser {
    phone: number;
    password: string;
}

@Injectable()
export class AuthService {
    private imloginUrl = 'http://im.test.linkerplus.com/user/login';
    private loginUrl = 'http://192.168.1.192:8000/api/authcheck/';
    constructor(private http: HttpClient) {
    }

    public getToken(): string {
        return localStorage.getItem('token');
    }

    imLogin(user: ImUser): Observable<any> {
        return this.http.post(this.imloginUrl, JSON.stringify(user), imhttpOptions);
    }

    linkerLogin(user: User): Observable<any> {
        return this.http.post(this.loginUrl, 'imid=' + user.imid + ';' + 'password=' + user.password, linkerhttpOptions);
    }
}
