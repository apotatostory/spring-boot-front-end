import { Component, ViewChild } from '@angular/core';
import { BasePageComponent } from './../../Base/base-page/base-page.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BasePageComponent {

  cols: number; // 欄位
  height = 44; // 長度
  products: any[]; // 產品
  count = 2;

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild('price', { static: false }) price;

  init(data?: any): void {
    console.log('init()........');

    // 測試 之後db補上
    super.sendAsync('/product/get', 'GET', {}).then(rsData => {
      this.products = rsData['products'];
    });

    this.cols = (window.innerWidth <= 600) ? 1 : 2;
    this.height = (window.innerWidth <= 600) ? 44 : 66;
  }

  onResize(event) {
    console.log('onResize()....');
    this.cols = (event.target.innerWidth <= 600) ? 1 : 2;
    this.height = (event.target.innerWidth <= 600) ? 44 : 66;
    console.log(this.cols);

  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  doClick(type: string, product?: any) {
    console.log('doClick....: ' + type);
    console.log(product);

    const func = {
      'deduct': () => product.count -= 1,
      'add': () => product.count += 1,
      'send': () => {
        super.sendAsync('/product/order', 'POST', { products: this.products }).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        });
      },
      'nothing': () => { }
    };

    func[type] ? func[type]() : func['nothing']();

  }
}
