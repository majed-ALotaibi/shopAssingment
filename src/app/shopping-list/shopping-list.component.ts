import {Ingredient} from "../Shared/ingrdient.model";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredient = [ new Ingredient("Apple",5),new Ingredient("tomatos",12)];

  constructor() { }

  ngOnInit(): void {
  }

}
