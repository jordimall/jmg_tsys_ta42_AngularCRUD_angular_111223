import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FakeDataService } from '../../services/fake-data.service';
import { Character } from './../../models/Character.model';

@Component({
  selector: 'app-random-characters',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './random-characters.component.html',
  styleUrl: './random-characters.component.css',
})
export class RandomCharactersComponent implements OnInit {
  characters: Character[] = [];
  arrayNumbre: string[] = [];
  limit: number = Number.MIN_VALUE;

  constructor(private fakeDataService: FakeDataService) {}

  ngOnInit(): void {
    this.fakeDataService.allData().subscribe(
      (data: Character[]): void => {
        this.limit = data.length;
        this.generateRandomNumbers();
        this.fakeDataService.allDataByIds(this.arrayNumbre.join('&')).subscribe(
          (data: Character[]): void => {
            this.characters = data;
          },
          (error: any) => {
            alert(error.message);
          }
        );
      },
      (error: any) => {
        alert(error.message);
      }
    );
  }

  private generateRandomNumbers = (): void => {
    const MAX_NUMBER_GENERATE: number = 8;
    if (this.limit < MAX_NUMBER_GENERATE) {
      for (let index = 1; index == this.limit; index++) {
        this.arrayNumbre.push(`id=${index}`);
      }
    } else {
      while (this.arrayNumbre.length < MAX_NUMBER_GENERATE) {
        const randomId = Math.floor(Math.random() * this.limit) + 1;
        if (!this.arrayNumbre.includes(`id=${randomId}`)) {
          this.arrayNumbre.push(`id=${randomId}`);
        }
      }
    }
  };
}
