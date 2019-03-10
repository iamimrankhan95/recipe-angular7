import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes:Recipe[]=[
    new Recipe('Beef Burger','this is simply a Beef Burger','https://bluewater.co.uk/sites/bluewater/files/styles/image_spotlight_large/public/images/spotlights/burger-cropped.jpg?itok=SeFYMFP6',[
      new Ingredient('bun',2),
      new Ingredient('onion',1),
      new Ingredient('meat',2)
    ]),
    new Recipe('Meat French Fries','this is simply Meat French Fries','https://www.washingtonian.com/wp-content/uploads/2018/08/CEFriesThumb18.jpg',[
      new Ingredient('potatoes',2),
      new Ingredient('meat',1)
    ]),
    new Recipe('Pasta','this is simply Pasta','https://amp.thisisinsider.com/images/5ad792ffbd967146008b45d9-750-562.jpg',[
      new Ingredient('Noodles',50),
      new Ingredient('HotDogs',2)
    ]),
    new Recipe('Chinese food','this is simply Chinese food','https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/02/07/15/chinese.jpg?w968h681',[
      new Ingredient('Noodles',50),
      new Ingredient('Butter',2)
    ]),
    new Recipe('Pizza','this is simply a Pizza','https://www.eatthis.com/wp-content/uploads/media/images/ext/487364384/pepperoin-pizza-500x366.jpg',[
      new Ingredient('Pizza bread',1),
      new Ingredient('tomatoes',2)
    ])
  ];
  recipeSelected=new EventEmitter<Recipe>();
  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }
}
