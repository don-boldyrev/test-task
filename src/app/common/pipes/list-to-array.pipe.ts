import { Pipe, PipeTransform } from '@angular/core';
import {List, Map} from 'immutable';

@Pipe({
  name: 'listToArray'
})
export class ListToArrayPipe implements PipeTransform {

  transform(value: List<Map<string, string|number>>): object[] {
    return value.toArray().map(map => map.toObject());
  }

}
