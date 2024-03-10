import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient,) { }

  getUserDataFromAuth(jwtToken: any): Observable<any> {
    const headers = { 'Authorization': `Bearer ${jwtToken}` };
    let assetUrl = environment.apiUrlAuth + 'current-user';
    return this.http.get<any>(assetUrl, { headers });
  }

  getDBSyncStatus(userName: any): Observable<any> {
    let assetUrl = environment.apiUrlOnboarding + 'user-details/data-sync-check/' + userName;
    return this.http.get<any>(assetUrl);
  }
}
