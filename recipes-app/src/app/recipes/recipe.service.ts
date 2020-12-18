import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This  is simply a test', 
            'https://p0.pikist.com/photos/666/25/food-meat-recipe-power-pork-dishes.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French fries', 20)
            ]),
        new Recipe(
            'Another Test Recipe', 
            'This  is simply a test', 
            'https://p0.pikist.com/photos/666/25/food-meat-recipe-power-pork-dishes.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}