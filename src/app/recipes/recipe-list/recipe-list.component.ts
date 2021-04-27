import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

recipes: Recipe [] = [ new Recipe("kabsa","this is kabsa","https://whatleenadid.files.wordpress.com/2019/01/img_0464.jpg?w=1000s")];

  constructor() { }

  ngOnInit(): void {
  }

}
