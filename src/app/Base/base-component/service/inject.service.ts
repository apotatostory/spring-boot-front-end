import { Injectable, Injector } from '@angular/core';

@Injectable()
export class InjectService {

  static injector: Injector;

  constructor() { }
}
