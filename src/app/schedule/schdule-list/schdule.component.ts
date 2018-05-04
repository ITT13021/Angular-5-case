import {Component, OnInit} from '@angular/core';
import {ScheduleService} from '../../schedule.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-schdule',
    templateUrl: './schdule.component.html',
    styleUrls: ['./schdule.component.css']
})
export class SchduleComponent implements OnInit {
    schedules: any;
    userToken: string;

    constructor(private scheduleService: ScheduleService,
                private router: Router) {
    }

    getSchedules(date): void {
        this.scheduleService.getSchedules(date)
            .subscribe(schedules => this.schedules = schedules.results);
    }

    edit(id): void {
        this.router.navigate([`scheduledetail/${id}`]);
    }

    deleteSchedule(id): void {
        this.scheduleService.deleteSchedule(id).subscribe(() => this.schedules = this.getSchedules('2018-03-19'));
    }

    ngOnInit() {
        this.userToken = localStorage.getItem('token');
        if (this.userToken) {
            this.getSchedules('2018-03-19');
        } else {
            const router = this.router;
            setTimeout(function () {
                router.navigate([`login`]);
            }, 2000);
        }

    }
}
