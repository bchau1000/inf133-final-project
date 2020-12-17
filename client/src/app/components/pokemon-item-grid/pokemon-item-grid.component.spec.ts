import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonItemGridComponent } from './pokemon-item-grid.component';

describe('PokemonItemGridComponent', () => {
  let component: PokemonItemGridComponent;
  let fixture: ComponentFixture<PokemonItemGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonItemGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonItemGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
