import {Component, Input, OnInit} from '@angular/core';
import {ScheduleService} from '../../schedule.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';


interface SchduleDetail {
    id: number;
    title: string;
    content: string;
}

@Component({
    selector: 'app-schedule-detail',
    templateUrl: './schedule-detail.component.html',
    styleUrls: ['./schedule-detail.component.css']
})
export class ScheduleDetailComponent implements OnInit {
    scheduleDetail: SchduleDetail;

    constructor(private scheduleService: ScheduleService,
                private route: ActivatedRoute,
                private location: Location, ) {
    }

    getScheduleDetail(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        if (id === 0) {
            this.scheduleDetail = {id: null, title: null, content: null};
            return;
        }
        this.scheduleService.getScheduleDetail(id)
            .subscribe(scheduleDetail => this.scheduleDetail = scheduleDetail);
    }

    goBack(): void {
        this.location.back();
    }

    updateOrCreateSchedule(schedule): void {
        if (schedule.id === null) {
            schedule.start_date = '2018-03-19T04:00:06.062000Z';
            schedule.end_date = '2018-03-19T05:00:06.062000Z';
            this.scheduleService.createSchedule(schedule)
                .subscribe(() => this.goBack());
            return;
        }
        this.scheduleService.updateSchedule(schedule)
            .subscribe(() => this.goBack());
    }

    ngOnInit() {
        this.getScheduleDetail();
    }

}
