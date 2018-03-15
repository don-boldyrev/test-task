import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Person} from '../interfaces';
import {PersonModel} from '../models';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent {

  public namePerson: string;
  public genderPerson: string;
  public birthYearPerson: string;
  public deathYearPerson: string;
  public parentPerson: string;
  public reignPerson: string;
  private _personList: Person[];
  public _selectedPerson: Person;
  public person =  {
    key: 0,
    name: '',
    gender: '',
    parent: undefined,
    birthYear: '',
    deathYear: '',
    reign: ''
  };
  constructor() { }


  @Input()
  private set personList (list: Person[]) {
    if (list) {
      this._personList = list;
      this.selectPerson = list.find(person => person.key === 0);
    }
  }
  @Input()
  set selectPerson(selectedPerson: Person) {
    this._selectedPerson = selectedPerson;
    console.log('selectedPerson', selectedPerson);
  }
  @Output()
  public addPerson: EventEmitter<Person> = new EventEmitter();

  onsubmit (event) {
    event.preventDefault();
    console.log('this.person', this.person);

    let lastKey;
    if (this._personList.length) {
      lastKey = this._personList.sort((a, b) => a.key - b.key)[this._personList.length - 1].key;
    } else {
      lastKey = -1;
    }
    this.person.key = lastKey + 1;
    if (this._selectedPerson) {
      this.person.parent = this._selectedPerson.key;
    }
    this.addPerson.emit(Object.assign({}, this.person));
    this.person = new PersonModel();
  }
}
