import { Component, OnInit, AfterViewChecked, Input, Output, EventEmitter,  ViewChild, ElementRef } from '@angular/core';
// import {List, Map} from 'immutable';
import {Person} from '../interfaces';

@Component({
  selector: 'app-family-tree',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.css']
})
export class FamilyTreeComponent implements OnInit, AfterViewChecked {
  constructor() { }
  public _personList: Person[];
  public currentPerson: Person;
  public childPersonArr: Person[];
  @ViewChild('rootHtml')
  public rootHtml: ElementRef;
  @Input()
  public first: boolean;
  @Input()
  public last: boolean;
  @Input()
  public oneChild: boolean;
  @Input()
  public key: number;
  @Input()
  private set personList (list: Person[]) {
    if (list !== undefined) {
      this._personList = list;
      if (this.key === undefined) {
        this.currentPerson = this._personList.find((person: Person) => person.key === 0);
        this.childPersonArr = this._personList.filter((person: Person) => person.parent === 0);
      } else {
        this.currentPerson = this._personList.find((person: Person) => person.key === this.key);
        this.childPersonArr = this._personList.filter((person: Person) => person.parent === this.key);
      }
    }
  }

  @Output()
  public selectPerson: EventEmitter<number> = new EventEmitter();
  @Output()
  public deletePerson: EventEmitter<number> = new EventEmitter();

  onSelectPerson (key) {
    this.selectPerson.emit(key);
  }
  onDeletePerson (key) {
    this.deletePerson.emit(key);
  }

  ngAfterViewChecked() {
    const pureElemets = [];
    const prevULs = [];
    let totalWidth = 0;
    if (this.rootHtml) {
      const rootElement = this.rootHtml.nativeElement;
      const li = rootElement.getElementsByTagName('li');
      for (let i = 0; i < li.length; i++) {
        const liItem = li[i];
        const childArr = liItem.children;
        const childLi = [];
        for (let j = 0; j < childArr.length; j++) {
          const nodeName = childArr[j].nodeName;
          if (nodeName === 'UL') {
            const componentHtml = childArr[j].children;
            for (let k = 0; k < componentHtml.length; k++) {
              childLi.push(componentHtml[k].children[0]);
            }
          }
        }
        if (childLi.length === 0) {
          pureElemets.push(liItem);
        }
      }
      pureElemets.forEach(elem => {
        if (elem.closest('ul ul ul')) {
          if (!prevULs.includes(elem.closest('ul'))) {
            prevULs.push(elem.closest('ul'));
          }
        } else {
          prevULs.push(elem);
        }
      });
      prevULs.forEach((item, index) => {
        totalWidth += Math.ceil(parseFloat(window.getComputedStyle(item).width));
        if (item.tagName === 'LI') {
          totalWidth += 10; // padding li
        }
      });
      totalWidth += 40; // padding root ul
      rootElement.style.width = totalWidth + 'px';
    }
  }
  ngOnInit() {
  }
}

