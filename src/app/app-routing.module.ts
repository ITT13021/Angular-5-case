import {NgModule} from '@angular/core';
import {SchduleComponent} from './schedule/schdule-list/schdule.component';
import {RouterModule, Routes} from '@angular/router';
import {ScheduleDetailComponent} from './schedule/schedule-detail/schedule-detail.component';
import {AuthComponent} from './auth/auth.component';

const routes: Routes = [
    {path: '', redirectTo: '/schedule', pathMatch: 'full'},
    {path: 'schedule', component: SchduleComponent},
    {path: 'scheduledetail/:id', component: ScheduleDetailComponent},
    {path: 'login', component: AuthComponent},
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
