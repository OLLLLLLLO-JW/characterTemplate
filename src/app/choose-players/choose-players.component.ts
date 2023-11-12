import { Component } from '@angular/core';



@Component({
  selector: 'app-choose-players',
  standalone: true,
  imports: [],
  templateUrl: './choose-players.component.html',
  styleUrl: './choose-players.component.scss'
})
export class ChoosePlayersComponent {
  selected = 'option 2'
}
