import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe
  //@Output() selectedRecipe=new EventEmitter<Recipe>();
  @Output() selectedRecipe=new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  selectRecipe(){
    //this.selectedRecipe.emit(this.recipe)
    this.selectedRecipe.emit()
  }
}
