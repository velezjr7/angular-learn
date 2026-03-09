import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Interceptor implements HttpInterceptor {
  intercept(
    req: import('@angular/common/http').HttpRequest<any>,
    next: import('@angular/common/http').HttpHandler,
  ) {
    const newReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer token'),
    });
    console.log('Intercepted request:');

    return next.handle(req);
  }
}
