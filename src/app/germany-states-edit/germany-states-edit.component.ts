import { Component, OnInit } from '@angular/core';
import { GermanyStatesService } from '../germany-states/germany-states.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GermanyStates } from '../germany-states/germany-states';

@Component({
  selector: 'app-germany-states-edit',
  templateUrl: './germany-states-edit.component.html',
  styleUrls: ['./germany-states-edit.component.scss']
})
export class GermanyStatesEditComponent implements OnInit {
  state: GermanyStates;

  constructor(private route: ActivatedRoute, private service: GermanyStatesService, private location: Location) { }

  ngOnInit(): void {
    const id =+ this.route.snapshot.paramMap.get('id');
    this.service.getState(id).subscribe(state => this.state = state);
  }

  save(): void {
    this.service.updateState(this.state).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
