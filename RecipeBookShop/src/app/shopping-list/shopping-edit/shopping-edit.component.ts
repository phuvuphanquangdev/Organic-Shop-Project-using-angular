import { ShoppingListService } from './../shopping-list.service';
import { Ingredients } from './../../shared/ingredients.model';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f',{static: false}) slForm: NgForm;

  startEditSub: Subscription;
  editMode = false;
  editedItemIndex: number;
  editItem: Ingredients;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
    this.startEditSub = this.shoppinglistService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editItem = this.shoppinglistService.getIngredientsByIndex(index);

          this.slForm.setValue({
            name: this.editItem.name,
            amount: this.editItem.amount
          });
        }
      );
  }

  onSubmit(form: NgForm){
    const value = form.value;
    const newIng = new Ingredients(value.name,value.amount);

    if(this.editMode){
      this.shoppinglistService.updateIngredients(this.editedItemIndex, newIng);
    } else {
      this.shoppinglistService.addIngredients(newIng);
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppinglistService.deleteIngredients(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.startEditSub.unsubscribe();
  }

}
