import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{

  recipes: Recipe[] = [
    new Recipe('Lasagna', 'This is simply a test', 'https://blog.giallozafferano.it/fablesucre/wp-content/uploads/2018/12/IMG_3883-720x1080.jpg')
  ];

  constructor(){}

  ngOnInit(){}
}
