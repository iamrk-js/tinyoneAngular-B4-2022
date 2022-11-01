import { Component, OnInit } from '@angular/core';
import { Iicons } from '../../model/feature';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public arr: Iicons[] = [
    {
      icon: `<i class="fa-brands fa-square-facebook"></i>`,
      hrefLink: `https://www.facebook.com/`
    },
    {
      icon: `<i class="fab fa-twitter-square"></i>`,
      hrefLink: `https://twitter.com/i/flow/login`
    },
    {
      icon: `<i class="fab fa-google-plus-square"></i>`,
      hrefLink: `https://www.google.com/`
    },
    {
      icon: `<i class="fab fa-pinterest-square"></i>`,
      hrefLink: `https://in.pinterest.com/`
    },
  ]

  public footerLink1 : Iicons[] = [
    {
      icon : 'HALOVIETNAM LTD',
      hrefLink : 'javascript:;'
    },
    {
      icon : '66, Dang Van ngu, Dong Da',
      hrefLink : 'javascript:;'
    },
    {
      icon : 'Hanoi, Vietnam',
      hrefLink : 'javascript:;'
    },
    {
      icon : 'contact@halovietnam.com',
      hrefLink : 'mailto:contact@halovietnam.com'
    },
    {
      icon : '9730839873',
      hrefLink : 'tel:973083987'
    }
  ]

  public footerLink2 : Iicons[] = [
    {
      icon : 'exapmple',
      hrefLink : 'javascript:;'
    },
    {
      icon : 'shop',
      hrefLink : 'javascript:;'
    },
    {
      icon : 'licence',
      hrefLink : 'javascript:;'
    }
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
