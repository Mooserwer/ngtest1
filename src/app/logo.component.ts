import { Component } from '@angular/core';

@Component({
  selector: 'my-logo',
  template:`<div class="cont-top-left">
              <img src="/images/logos/test_logo.png" alt="TESTLOGO" />
            </div>`,
  styles: ['.cont-top-left {float: left;width: 30%;padding-top: 5px;font-size: 66px;color: #111;line-height: 100px;text-align: right;}']
})
export class LogoComponent {

}
