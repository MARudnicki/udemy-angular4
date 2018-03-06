import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if(!value){
      return null;
    }

    return value.substring(0, 3) + '...';

  }

}
