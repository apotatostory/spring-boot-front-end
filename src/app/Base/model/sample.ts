import { Type } from '@angular/core';
/**
 * For dynamic使用
 */
export class Sample {
    constructor(public name: Type<any>, public data: any) { }
}
