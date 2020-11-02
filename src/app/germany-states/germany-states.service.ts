import { Injectable } from '@angular/core';
import { GermanyStates } from './germany-states';

@Injectable({
  providedIn: 'root'
})
export class GermanyStatesService {

  states: GermanyStates[] = [
    {
      id: 1,
      name: "Baden-Württemberg",
    },
    {
      id: 2,
      name: "Bayern",
    },
    {
      id: 3,
      name: "Berlin",
    },
    {
      id: 4,
      name: "Brandenburg",
    },
    {
      id: 5,
      name: "Bremen",
    },
    {
      id: 6,
      name: "Hamburg",
    },
    {
      id: 7,
      name: "Hessen",
    },
    {
      id: 8,
      name: "Mecklenburg-Vorpommern",
    },
    {
      id: 9,
      name: "Niedersachsen",
    },
    {
      id: 10,
      name: "Nordrhein-Westfalen",
    },
    {
      id: 11,
      name: "Rheinland-Pfalz",
    },
    {
      id: 12,
      name: "Saarland",
    },
    {
      id: 13,
      name: "Sachsen",
    },
    {
      id: 14,
      name: "Sachsen-Anhalt",
    },
    {
      id: 15,
      name: "Schleswig-Holstein",
    },
    {
      id: 16,
      name: "Thüringen",
    }
  ]

  constructor() { }

  getStates(): GermanyStates[] {
    return this.states;
  }
}
