import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg';

@Pipe({
  name: "price",
  pure: false
})

export class PricePipe implements PipeTransform {
  transform(input: Keg[], desiredPrice) {
    var output: Keg[] = [];
    if(desiredPrice === "cheaperKegs") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].price < 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPrice === "spendyBrews") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].price >= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
