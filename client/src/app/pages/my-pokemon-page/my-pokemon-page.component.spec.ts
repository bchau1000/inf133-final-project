import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPokemonPageComponent } from './my-pokemon-page.component';

describe('MyPokemonPageComponent', () => {
  let component: MyPokemonPageComponent;
  let fixture: ComponentFixture<MyPokemonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPokemonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPokemonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
