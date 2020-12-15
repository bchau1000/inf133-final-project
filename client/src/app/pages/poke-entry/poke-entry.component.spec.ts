import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeEntryComponent } from './poke-entry.component';

describe('PokeEntryComponent', () => {
  let component: PokeEntryComponent;
  let fixture: ComponentFixture<PokeEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
