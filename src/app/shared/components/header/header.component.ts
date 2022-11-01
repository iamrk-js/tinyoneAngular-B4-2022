import { Component, OnInit } from '@angular/core';
import { Iicons } from '../../model/feature';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public arr:Iicons[] = [
    {
      icon : `<i class="fa-brands fa-apple"></i>`,
      hrefLink : `https://www.apple.com/in/`
    },
    {
      icon : ` <i class="fa-solid fa-mobile"></i>`,
      hrefLink : `https://www.android.com/intl/en_in/`
    },
   {
    icon :  `<i class="fa-brands fa-windows"></i>`,
    hrefLink :  `https://www.microsoft.com/en-in/windows?r=1`
   }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
