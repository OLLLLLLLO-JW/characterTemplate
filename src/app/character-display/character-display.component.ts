import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-character-display',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './character-display.component.html',
  styleUrl: './character-display.component.scss'
})
export class CharacterDisplayComponent {

  toppings = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

}
