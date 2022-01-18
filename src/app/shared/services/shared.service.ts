import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable()
export class SharedService {
  constructor(private httpService: HttpClient, private router: Router) {}

  sum(a: number, b: number): number {
    return a + b;
  }

  callAsyncAPI(path: string) {
    return this.httpService.get(path);
  }

  update(data: { title: string }) {
    return of(data).subscribe((value) => {
      console.log('value', value);
      localStorage.setItem('testItem', data.title);
      return this.router.navigate(['/']);
    });
  }
}
