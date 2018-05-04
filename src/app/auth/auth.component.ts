import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
    user: any;
    phone: number;
    password: string;

    constructor(private authService: AuthService,
                private router: Router) {
    }

    login(): void {
        const user = {phone: this.phone, password: this.password, imid: null, token: null};
        const imuser = {phone: this.phone, password: this.password};
        console.log('login');
        this.authService.imLogin(imuser)
            .subscribe(user1 => this.user = user1,
                error => console.error(error),
                () => {
                    if (this.user.result.id) {
                        user.imid = this.user.result.id;
                        this.authService.linkerLogin(user)
                            .subscribe(user2 => user.token = user2.token,
                                error => console.error(error),
                                () => {
                                    localStorage.setItem('token', user.token);
                                    this.router.navigate([`schedule`]);
                                }
                            );
                    } else {
                        alert('登录失败！');
                    }
                }
            );
    }

    ngOnInit() {
    }

}
