import {Pipe, PipeTransform} from '@angular/core';
import {Pet} from '../model/pet';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(pets: Pet[], searchText: string): any[] {
    if (searchText) {
      const search = searchText.toLocaleLowerCase();

      return pets.filter(pet => {
          return pet.name.toLocaleLowerCase().includes(search);
        }
      );
    }
    return pets;
  }
}
