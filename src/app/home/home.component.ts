import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allRecipes: any[] = []
  page: number = 0
  searchKey: string = ""
  filters: any = { lunch: false, dinner: false, snacks: false,dessert:false }
  filterList: string[] = []
  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.getRecipes()
  }
  getRecipes() {
    this.api.getAllRecipes().subscribe({
      next: (res: any) => {
        console.log(res);
        this.allRecipes = res.recipes
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
  updateFilterList(){
    this.filterList=[]
    for (let k of Object.keys(this.filters)) {
      if (this.filters[k]) {
        this.filterList.push(k)
      }
    }
    console.log(this.filterList);
    
  }
}
