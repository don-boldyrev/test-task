import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
// import {List, Map} from 'immutable';
import {mock} from './mock';
import {Person} from './interfaces';


export class FamilyTreeService {
  constructor() { }
  public personList$: Observable<Person[]> =  Observable.of(mock)
  /*.map((personArr: Person[]) => {
    const mapArr: Map<string, string|number>[]  = personArr.map((personObj: Person) => {
      return Map(personObj);
    });
    const listMap: List<Map<string, string|number>> = List(mapArr);
    return listMap;
  })*/
  .delay(1000);
  }

