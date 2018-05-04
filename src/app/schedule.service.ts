import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const updateHttpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

interface SchduleDetail {
    id: number;
    title: string;
    content: string;
}

@Injectable()
export class ScheduleService {
    private schedulesUrl = 'http://192.168.1.192:8000/api/schedule/schedule';

    constructor(private http: HttpClient) {
    }

    getSchedules(date): Observable<any> {
        const url = `${this.schedulesUrl}/?schedule_dd=${date}`;
        return this.http.get<any>(url);
    }

    getScheduleDetail(id): Observable<any> {
        const url = `${this.schedulesUrl}/${id}`;
        return this.http.get<any>(url);
    }

    createSchedule(schedule: SchduleDetail): Observable<any> {
        return this.http.post(`${this.schedulesUrl}/`, schedule, updateHttpOptions);
    }

    updateSchedule(schedule: SchduleDetail): Observable<any> {
        const url = `${this.schedulesUrl}/${schedule.id}/`;
        return this.http.put(url, schedule, updateHttpOptions);
    }

    deleteSchedule(id): Observable<any> {
        return this.http.delete(`${this.schedulesUrl}/${id}/`);
    }

}
