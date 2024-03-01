import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {
  transform(allRecipes: any[], filterList: any[]): any[] {
    if (!allRecipes || filterList.length == 0) {
      return allRecipes
    }
    else {
      return allRecipes?.filter((i:any) => filterList.every(f=>i.mealType?.map((j:string)=>j.toLowerCase()).includes(f)))
    }
  }

}
