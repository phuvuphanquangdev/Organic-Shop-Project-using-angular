import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
  

    private recipes: Recipe[] = [];
    //  = [
    //     new Recipe('Burger', 
    //     'A tasty Burger!!!','https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg',
    //     [
    //         new Ingredients('Meat', 2),
    //         new Ingredients('Bread', 1)
    //     ]),
    //     new Recipe('Pizza', 
    //     'This is a another recipe for test',
    //     'http://storage.googleapis.com/bro-cdn1/zgrid/themes/10307/images/home/pizza.png',
    //     [
    //         new Ingredients('Cheese', 3),
    //         new Ingredients('Tomato', 5)
    //     ])
    //   ];

      constructor(private shoppingListService: ShoppingListService){}


      setRecipes(newRecipes: Recipe[]){
        this.recipes = newRecipes;
        this.recipeChanged.next(this.recipes.slice());
      }

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipeById(id: number){
        return this.recipes[id];
      }

      addIngredientsToShoppingService(ingredients: Ingredients[]){
        this.shoppingListService.addIngredientsArray(ingredients);
      }

      addRecipe(newRecipe: Recipe){
        this.recipes.push(newRecipe);
        this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, updRecipe: Recipe){
        this.recipes[index] = updRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
      }

      
}