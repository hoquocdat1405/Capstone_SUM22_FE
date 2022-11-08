import { SpinnerService } from './_services/spinner.service';
import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpHeaders,
    HttpEventType,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(private spinnerService: SpinnerService) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        this.spinnerService.requestStarted();
        const token = localStorage.getItem('token') || "";
        const headers = new HttpHeaders()
            .set('access-token', token)
            .set('Authorization', 'Bearer ' + token);
        const AuthRequest = request.clone({ headers: headers });
        return next.handle(AuthRequest).pipe(
            tap((event) => {
                if(event.type === HttpEventType.Response) {
                    this.spinnerService.requestEnded();
                }
            },(error: HttpErrorResponse) => {
                this.spinnerService.resetSpinner();
                throw error;
            })
        )
    }
}