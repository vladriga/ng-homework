import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placesFilter'
})
export class PlacesFilterPipe implements PipeTransform {

  transform(places: any, type: string): any {
    if (!type) {
      type = 'hotel';
    }
    return places.filter(place => place.type.toLowerCase() === type);
  }
}
