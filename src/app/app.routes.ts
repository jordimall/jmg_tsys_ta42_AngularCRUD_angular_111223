import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { RandomCharactersComponent } from './characters/random-characters/random-characters.component';
import { ListCharactersComponent } from './characters/list-characters/list-characters.component';
import { ShowCharactersComponent } from './characters/show-characters/show-characters.component';
import { FormCharactersComponent } from './characters/form-characters/form-characters.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'characters',
    component: CharactersComponent,
    children: [
      { path: 'all', component: ListCharactersComponent },
      { path: 'random', component: RandomCharactersComponent },
      { path: 'new', component: FormCharactersComponent },
      { path: 'edit/:id', component: FormCharactersComponent },
      { path: 'show/:id', component: ShowCharactersComponent },
    ],
  },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '404' },
];
