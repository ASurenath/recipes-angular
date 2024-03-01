import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

 
  transform(allRecipes: any[], searchKey: string): any[] {
    var result:any[]=[]
    if(!allRecipes||searchKey==""){
      return allRecipes
    }
    else{
      return allRecipes?.filter(i=>(
        (i.name?.trim().toLowerCase().includes(searchKey.trim().toLowerCase())||
        (i.cuisine?.trim().toLowerCase().includes(searchKey.trim().toLowerCase())
        ))))
    }
  }


}
