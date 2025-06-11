import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: string, limit: number=20): string {
    // for(let i = 0; i<value.length/2; i++){
    //   let temp = value[i];
    //   value[i] = value[value.length-1];
    //   value[value.length-1] = temp;
    // }

    return value;
  }

}
