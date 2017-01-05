import { Component } from '@angular/core';

@Component({
  selector: 'unico-locale',
  template:`<div class="cont-top-right">
              <button class="btn btn-default btn-xs locale-en" onclick="javascript:setLocale('en');">English</button>
            </div>`,
  styles: ['.cont-top-right {float: right;width: 30%;padding-top: 5px;font-size: 66px;color: #111;line-height: 100px;text-align: left;}',
           '.locale-en{background-image: url("/images/flags/flags-en.png");background-position: -1px -1px;background-repeat: no-repeat;background-size: 31px 23px;padding-left: 34px;color: #000;}',
           '.locale-ko{background-image: url("/images/flags/flags-ko.png");background-position: -1px -1px;background-repeat: no-repeat;background-size: 31px 23px;padding-left: 34px;color: #000;}']
})
export class LocaleComponent {

}
