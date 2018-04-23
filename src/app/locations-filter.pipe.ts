import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationsFilter'
})
export class LocationsFilterPipe implements PipeTransform {

  transform(locations: any, type: string): any {
    if (!type) {
      type = 'hotel';
    }
    return locations.filter(location => location.type.toLowerCase() === type);
  }
}
