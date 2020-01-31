import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private cache: {} = {};

  public getCache(): {} {
    return this.cache;
  }

  public setCache(cache: {}) {
    this.cache = cache;
  }

  constructor() { }
}
