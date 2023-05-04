import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';
import { map } from  'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  serverUrl: string = "http://127.0.0.1:5001/";
  constructor(private httpClient: HttpClient) { }

  public sendFormData(formData: FormData) {
    return this.httpClient.post<any>(this.serverUrl, formData, {
      reportProgress: true,
      observe: 'events'
    });
}

}
