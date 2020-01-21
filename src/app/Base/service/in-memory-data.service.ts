import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const menu = [{
      '_id': 'AA01',
      'GROUP': 'AA',
      'NODE': 2,
      'NAME': '測試測試大大累',
      '_class': 'com.example.mongoDB.entity.Menu'
    }, {
      '_id': 'AA02',
      'GROUP': 'AA',
      'NODE': 2,
      'NAME': '測試測試大大累',
      '_class': 'com.example.mongoDB.entity.Menu'
    }, {
      '_id': 'AA03',
      'GROUP': 'AA',
      'NODE': 2,
      'NAME': '測試測試大大累',
      '_class': 'com.example.mongoDB.entity.Menu'
    }, {
      '_id': 'AA',
      'GROUP': 'AA',
      'NODE': 1,
      'NAME': '大大累',
      '_class': 'com.example.mongoDB.entity.Menu'
    }, {
      '_id': 'BB',
      'GROUP': 'BB',
      'NODE': 1,
      'NAME': '大大BB累31',
      '_class': 'com.example.mongoDB.entity.Menu'
    }, {
      '_id': 'BB01',
      'GROUP': 'BB',
      'NODE': 2,
      'NAME': '大大BB累31',
      '_class': 'com.example.mongoDB.entity.Menu'
    }, {
      '_id': 'BB02',
      'GROUP': 'BB',
      'NODE': 2,
      'NAME': '大大21',
      '_class': 'com.example.mongoDB.entity.Menu'
    }, {
      '_id': 'BB03',
      'GROUP': 'BB',
      'NODE': 2,
      'NAME': '大大31',
      '_class': 'com.example.mongoDB.entity.Menu'
    }, {
      '_id': 'CC03',
      'GROUP': 'CC',
      'NODE': 2,
      'NAME': '大C大31',
      '_class': 'com.example.mongoDB.entity.Menu'
    }, {
      '_id': 'CC',
      'GROUP': 'CC',
      'NODE': 1,
      'NAME': '大C大31',
      '_class': 'com.example.mongoDB.entity.Menu'
    }, {
      '_id': 'CC01',
      'GROUP': 'CC',
      'NODE': 2,
      'NAME': '大C01',
      '_class': 'com.example.mongoDB.entity.Menu'
    }, {
      '_id': 'CC02',
      'GROUP': 'CC',
      'NODE': 2,
      'NAME': '大C333',
      '_class': 'com.example.mongoDB.entity.Menu'
    }];

    return { menu };
  }

  constructor() { }
}
