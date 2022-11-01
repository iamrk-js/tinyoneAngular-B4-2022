import { Component, Input, OnInit } from '@angular/core';
import { Iicons } from '../../model/feature';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() iconsArray !: Iicons[]
  @Input() ulClassName!: string ;
  constructor() { }

  ngOnInit(): void {
    console.log(this.iconsArray)
  }

}
