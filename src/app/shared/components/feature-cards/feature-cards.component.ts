import { Component, Input, OnInit } from '@angular/core';
import { Ifeature } from '../../model/feature';

@Component({
  selector: 'app-feature-cards',
  templateUrl: './feature-cards.component.html',
  styleUrls: ['./feature-cards.component.scss']
})
export class FeatureCardsComponent implements OnInit {
  @Input() featureObj!: Ifeature;
  constructor() { }

  ngOnInit(): void {
  }

}
