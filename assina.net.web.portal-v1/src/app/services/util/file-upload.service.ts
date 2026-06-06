import { HttpClient, HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppInjector } from './app-injector.service';

@Injectable({
   providedIn: 'root'
})
export class FileUploadService {

   private apiUrl: string;
   private http: HttpClient;

   constructor() {
      const injector = AppInjector.getInjector();
      this.http = injector.get(HttpClient);
   }

   setApiUrl(url) {
      this.apiUrl = url;
   }

   download(id) {
      return this.http.request('GET', `${this.apiUrl}/${id}`, {
         responseType: 'blob',
         reportProgress: true,
         observe: 'events'
      }).pipe(
         map(event => this.getDownloadEventMessage(event)),
         catchError(this.handleError)
      );
   }

   upload(id, file) {
      const formdata: FormData = new FormData();
      formdata.append('file', file);
      return this.http.request('POST', `${this.apiUrl}/${id}`, {
         body: formdata,
         reportProgress: true,
         observe: 'events'
      }).pipe(
         map(event => this.getUploadEventMessage(event)),
         catchError(this.handleError)
      );
   }

   private getDownloadEventMessage(event: HttpEvent<any>) {
      switch (event.type) {
         case HttpEventType.DownloadProgress:
            return this.fileProgress(event, 'downloaded');
         case HttpEventType.Response:
            return { status: 'success', message: event.body };
         //return this.apiResponse(event);
         default:
            return { status: 'event', message: `Unhandled event: ${event.type}` };
      }
   }

   private getUploadEventMessage(event: HttpEvent<any>) {
      switch (event.type) {
         case HttpEventType.UploadProgress:
            return this.fileProgress(event, 'uploaded');
         case HttpEventType.Response:
            return { status: 'success', message: 'File is completely uploaded!' };
         //return this.apiResponse(event);
         default:
            return { status: 'event', message: `Unhandled event: ${event.type}` };
      }
   }

   private fileProgress(event, text) {
      const percentDone = Math.round(100 * event.loaded / event.total);
      return { status: 'progress', message: percentDone };
   }

   private apiResponse(event) {
      return event.body;
   }

   private handleError(error: HttpErrorResponse) {
      return throwError(error);
   }

}
