import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This  is simply a test', 
        'https://p0.pikist.com/photos/666/25/food-meat-recipe-power-pork-dishes.jpg'),
        new Recipe('Another Test Recipe', 'This  is simply a test', 
        'https://p0.pikist.com/photos/666/25/food-meat-recipe-power-pork-dishes.jpg')
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}