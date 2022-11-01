import { Component, OnInit } from '@angular/core';
import { Ifeature } from '../../model/feature';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  featureArray : Ifeature[] = [
    {
      icon : '<i class="fa-brands fa-aws"></i>',
      heading : 'Fully Responsive',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      icon : '<i class="fa-regular fa-lemon"></i>',
      heading : 'Fully Responsive',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      icon : '<i class="fa-regular fa-folder"></i>',
      heading : 'Fully Responsive',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      icon : '<i class="fa-solid fa-code"></i>',
      heading : '  HTML5 and CSS3',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      icon : '<i class="fa-regular fa-envelope"></i>',
      heading : 'Email Template',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    },
    {
      icon : '<i class="fa-regular fa-bookmark"></i>',
      heading : 'Free to download',
      info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
