import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const menu = [{
      cateName: '大大累',
      menuList: [{
        '_id': 'AA01',
        'task': 'login', 'group': 'AA',
        'node': 2,
        'name': '測試測試大大累',
        '_class': 'com.example.mongoDB.entity.Menu'
      }, {
        '_id': 'AA02',
        'task': 'login', 'group': 'AA',
        'node': 2,
        'name': '測試測試大大累',
        '_class': 'com.example.mongoDB.entity.Menu'
      }, {
        '_id': 'AA03',
        'task': 'login', 'group': 'AA',
        'node': 2,
        'name': '測試測試大大累',
        '_class': 'com.example.mongoDB.entity.Menu'
      }]
    }, {
      cateName: '大大BB累31',
      menuList: [{
        '_id': 'BB01',
        'task': 'buy00001', 'group': 'BB',
        'node': 2,
        'name': '大大BB累31',
        '_class': 'com.example.mongoDB.entity.Menu'
      }, {
        '_id': 'BB02',
        'task': 'buy00001', 'group': 'BB',
        'node': 2,
        'name': '大大21',
        '_class': 'com.example.mongoDB.entity.Menu'
      }, {
        '_id': 'BB03',
        'task': 'buy00001', 'group': 'BB',
        'node': 2,
        'name': '大大31',
        '_class': 'com.example.mongoDB.entity.Menu'
      }]
    }, {
      cateName: '大C大31',
      menuList: [{
        '_id': 'CC01',
        'task': 'home',
        'group': 'CC',
        'node': 2,
        'name': '大C01',
        '_class': 'com.example.mongoDB.entity.Menu'
      }, {
        '_id': 'CC02',
        'task': 'home',
        'group': 'CC',
        'node': 2,
        'name': '大C333',
        '_class': 'com.example.mongoDB.entity.Menu'
      }]
    }];

    return { menu };
  }

  constructor() { }
}
