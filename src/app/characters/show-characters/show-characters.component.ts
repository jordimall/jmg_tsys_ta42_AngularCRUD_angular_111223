import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { FakeDataService } from '../../services/fake-data.service';
import { Character } from './../../models/Character.model';

@Component({
  selector: 'app-show-characters',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './show-characters.component.html',
  styleUrl: './show-characters.component.css',
})
export class ShowCharactersComponent implements OnInit {
  id: any;
  number: number = Number.MIN_VALUE;
  character: Character = {
    id: Number.MIN_VALUE,
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: '',
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fakeDataService: FakeDataService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id !== null) {
      this.fakeDataService.getIdData(this.id).subscribe(
        (data: Character): void => {
          this.character = data;
        },
        (error) => {
          alert(error.message);
        }
      );
    }
  }

  public deleteCharacter = (id: number): void => {
    this.fakeDataService.deletData(id).subscribe(
      (data: any): void => {
        alert('Elemento borrado correctamente');
        this.router.navigate([`./characters`]);
      },
      (error: any): void => {
        alert(error.message);
      }
    );
  };
}
