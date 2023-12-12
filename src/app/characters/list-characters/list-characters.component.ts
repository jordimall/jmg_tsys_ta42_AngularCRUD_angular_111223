import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Character } from '../../models/Character.model';
import { FakeDataService } from '../../services/fake-data.service';

@Component({
  selector: 'app-list-characters',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-characters.component.html',
  styleUrl: './list-characters.component.css',
})
export class ListCharactersComponent {
  characters: Character[] = [];

  constructor(private fakeDataService: FakeDataService) {}

  ngOnInit(): void {
    this.fakeDataService.allData().subscribe(
      (data: Character[]): void => {
        this.characters = data;
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }
}
