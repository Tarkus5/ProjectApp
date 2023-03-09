import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Lasagna Pippo Franco',
      'Lasagna + Pippo Franco? Stiamo scherzando?',
      'http://www.cacciatoredilibri.com/wp-content/uploads/2020/04/IMG_20200414_221422.jpg',
      [
        new Ingredient('Pippo Franco', 1),
        new Ingredient('Pasta Fresca', 10),
        new Ingredient('Ragù', 100),
        new Ingredient('Mortadella', 5),
        new Ingredient('Uova', 4),
      ]),
    new Recipe('Carciofi Christian De Sica',
      'Delicatissimi...',
      'https://upload.wikimedia.org/wikipedia/commons/2/2b/Christian_De_Sica.jpg',
      [
        new Ingredient('Christian De Sica', 1),
        new Ingredient('Carciofi', 400),
        new Ingredient('Sugo', 100),
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
