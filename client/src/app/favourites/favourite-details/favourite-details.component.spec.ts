import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteDetailsComponent } from './favourite-details.component';

describe('FavouriteDetailsComponent', () => {
  let component: FavouriteDetailsComponent;
  let fixture: ComponentFixture<FavouriteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
