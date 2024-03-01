import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getAllRecipes(){
    return this.http.get('https://dummyjson.com/recipes?limit=50')
  }
  getRecipe(id:number){
    return this.http.get(`https://dummyjson.com/recipes/${id}`)
  }
}
