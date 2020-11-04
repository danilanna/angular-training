import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GermanyStates } from '../germany-states';

@Component({
  selector: 'app-germany-states-detail',
  templateUrl: './germany-states-detail.component.html',
  styleUrls: ['./germany-states-detail.component.scss']
})
export class GermanyStatesDetailComponent implements OnInit {
  @Input() selectedState: GermanyStates;
  @Output() resetEvent = new EventEmitter();

  clear(): void {
    this.resetEvent.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
