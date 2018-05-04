import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {SchduleComponent} from './schedule/schdule-list/schdule.component';
import {ScheduleService} from './schedule.service';
import {AppRoutingModule} from './app-routing.module';
import {ScheduleDetailComponent} from './schedule/schedule-detail/schedule-detail.component';
import {FormsModule} from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import {TokenInterceptor} from './auth/token.interceptor';
import {AuthService} from './auth/auth.service';


@NgModule({
    declarations: [
        AppComponent,
        SchduleComponent,
        ScheduleDetailComponent,
        AuthComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        ScheduleService,
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
