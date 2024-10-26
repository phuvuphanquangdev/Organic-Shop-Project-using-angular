import { Ingredients } from './../shared/ingredients.model';
import { Subject } from 'rxjs';


export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredients[]>();
    startedEditing = new Subject<number>();
    
    private ingredients: Ingredients[] = [
        new Ingredients('Apples', 5),
        new Ingredients('Tomatoes', 10)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredientsByIndex(index: number){
        return this.ingredients[index];
    }

    addIngredients(ing: Ingredients){
        this.ingredients.push(ing);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredientsArray(ingredients: Ingredients[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredients(index: number, newIng: Ingredients){
        this.ingredients[index] = newIng;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredients(index: number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}