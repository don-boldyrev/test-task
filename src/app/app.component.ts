import { Component, OnInit } from '@angular/core';
import {FamilyTreeService} from './family-tree.service';
// import {List, Map} from 'immutable';
import {Person} from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private _familyTreeService: FamilyTreeService) { }
  public personList: Person[];
  ngOnInit() {
    this._familyTreeService.personList$.subscribe((personList) => {
      this.personList = personList;
    });
  }
  onAddPerson (person) {
    this.personList.push(person);
    this.personList = this.personList.slice();
  }
  onDeletePerson(person) {
    this.personList = this.personList.filter(item => item !== person && item.parent !== person.key);

  }
}
