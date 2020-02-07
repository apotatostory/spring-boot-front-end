import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectService {

  // 先留著，有時候需要這個來inject
  static injector: Injector;

  constructor() { }
}
