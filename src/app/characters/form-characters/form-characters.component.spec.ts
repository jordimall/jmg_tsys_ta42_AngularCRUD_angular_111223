import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCharactersComponent } from './form-characters.component';

describe('FormCharactersComponent', () => {
  let component: FormCharactersComponent;
  let fixture: ComponentFixture<FormCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCharactersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
