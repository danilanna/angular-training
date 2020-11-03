import { Component, OnInit } from '@angular/core';
import { GermanyStatesService } from './germany-states.service';
import { GermanyStates } from './germany-states';

@Component({
  selector: 'app-germany-states',
  templateUrl: './germany-states.component.html',
  styleUrls: ['./germany-states.component.scss'],
})
export class GermanyStatesComponent implements OnInit {

  states: GermanyStates[] = [];
  
  selectedState: GermanyStates;

  onSelect(state: GermanyStates): void {
    this.selectedState = state;
  }

  constructor(private service: GermanyStatesService) { }

  ngOnInit(): void {
    this.getStates();
  }

  getStates(): void {
    this.service.getStates().subscribe(states => this.states = states);
  }

  reset() {
    this.selectedState = null;
  }

  delete(state: GermanyStates) {
    this.service.deleteState(state.id).subscribe(() => {
      this.getStates();
      this.reset();
    });
  }

}
