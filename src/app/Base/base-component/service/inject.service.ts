import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectService {

  static injector: Injector;

  constructor() { }
}
