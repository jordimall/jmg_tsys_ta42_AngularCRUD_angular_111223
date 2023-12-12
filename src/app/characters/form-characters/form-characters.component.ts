import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { FakeDataService } from '../../services/fake-data.service';
import { Character } from './../../models/Character.model';
@Component({
  selector: 'app-form-characters',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-characters.component.html',
  styleUrl: './form-characters.component.css',
})
export class FormCharactersComponent implements OnInit {
  id: any;
  validation: boolean = true;
  character: Character = {
    id: Number.MIN_VALUE,
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
  };
  characterForm = new FormGroup({
    name: new FormControl('', Validators.required),
    status: new FormControl('Unknown', Validators.required),
    species: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    origin: new FormControl('', Validators.required),
  });
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fakeDataService: FakeDataService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id !== null) {
      this.validation = !this.validation;
      this.fakeDataService.getIdData(this.id).subscribe(
        (data: Character): void => {
          this.characterForm.setValue({
            name: data.name,
            status: data.status,
            species: data.species,
            gender: data.gender,
            origin: data.origin,
          });
          this.character = data;
        },
        (error) => {
          alert(error);
        }
      );
    } else {
      this.fakeDataService.allData().subscribe(
        (data: Character[]): void => {
          this.id = data[data.length].id + 1;
        },
        (error: any) => {
          alert(error);
        }
      );
    }
  }

  findOut = (): void => {
    this.character.id = this.id;
    this.character.name = this.characterForm.value.name ?? 'error';
    this.character.status = this.characterForm.value.status ?? 'error';
    this.character.species = this.characterForm.value.species ?? 'error';
    this.character.gender = this.characterForm.value.gender ?? 'error';
    this.character.origin = this.characterForm.value.origin ?? 'error';
    if (!this.validation) {
      this.fakeDataService.putDatas(this.id, this.character).subscribe(
        (data: Character): void => {
          this.router.navigate([`./characters/show/${data.id}`]);
        },
        (error: any): void => {
          alert(error.message);
        }
      );
    } else {
      this.fakeDataService.postData(this.character).subscribe(
        (data: Character): void => {
          this.router.navigate([`/characters/show/${data.id}`]);
        },
        (error: any): void => {
          alert(error.message);
        }
      );
    }
  };
}
