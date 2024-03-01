import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe:any={}
  constructor(private api:ApiService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      console.log(res);
      const { id } = res
      this.getRecipeDetails(id)
    })
  }
  getRecipeDetails(id:number){
    this.api.getRecipe(id).subscribe({
      next:(res:any) => {
        console.log(res);
        this.recipe = res

      },
      error:(err:any) => {
        console.log(err);
      }
    })
  }
}
