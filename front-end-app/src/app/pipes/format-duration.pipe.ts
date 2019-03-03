import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var result: String = "";
    var minutes: number = Math.floor(value / 60);
    result += `${minutes}:`;
    var seconds: number = (value - minutes * 60);
    if (seconds < 10) {
      result += `0`;
    }
    result += `${seconds}`;
    return result;
  }
}
