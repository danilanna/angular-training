import { Component, OnInit, Input } from '@angular/core';
import { GermanyStates } from '../germany-states/germany-states';

@Component({
  selector: 'app-germany-states-detail',
  templateUrl: './germany-states-detail.component.html',
  styleUrls: ['./germany-states-detail.component.scss']
})
export class GermanyStatesDetailComponent implements OnInit {
  @Input() selectedState: GermanyStates;
  
  constructor() { }

  ngOnInit(): void {
  }

}
