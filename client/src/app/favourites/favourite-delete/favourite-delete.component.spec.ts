import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteDeleteComponent } from './favourite-delete.component';

describe('FavouriteDeleteComponent', () => {
  let component: FavouriteDeleteComponent;
  let fixture: ComponentFixture<FavouriteDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
