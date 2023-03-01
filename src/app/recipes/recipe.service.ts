import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Lasagna',
      'La regina della tavola!',
      'https://blog.giallozafferano.it/fablesucre/wp-content/uploads/2018/12/IMG_3883-720x1080.jpg',
      [
        new Ingredient('Ragù', 1),
        new Ingredient('Besciamella', 1),
        new Ingredient('Pasta fresca', 50),
        new Ingredient('Uova', 4),
        new Ingredient('Mortadella', 3),
      ]),
    new Recipe(
      'Pizza',
      'Rotonda delizia per grandi e piccini!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      [
        new Ingredient('Sugo', 1),
        new Ingredient('Farina', 1),
        new Ingredient('Uova', 12),
        new Ingredient('Mozzarella', 2),
        new Ingredient('Salame', 10),
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
