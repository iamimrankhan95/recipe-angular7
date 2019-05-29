import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecipeService } from './recipe.service';
import { Recipe } from 'src/app/recipes/recipe.model';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) {

  }
  storeRecipe() {
    const token = this.authService.getUserToken();
    return this.httpClient.put('https://ng-recipe-book-a48f4.firebaseio.com/recipe.json?auth=' + token, this.recipeService.getRecipes())
  }
  retriveRecipe() {
    const token = this.authService.getUserToken();
    return this.httpClient.get<Recipe[]>('https://ng-recipe-book-a48f4.firebaseio.com/recipe.json?auth=' + token, {
      observe: 'body',
      responseType: 'json'
    }).pipe(
      map( // is for formatting the data
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe.ingredients) {// this is for handling the data presentation, because there is property inconsistency in database
              console.log(recipe)
              recipe.ingredients = [];
            }
          }
          return recipes;
        }
      ),
      tap()
    ).subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    )
  }
}