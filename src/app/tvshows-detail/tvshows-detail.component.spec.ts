import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowsDetailComponent } from './tvshows-detail.component';

describe('TvshowsDetailComponent', () => {
  let component: TvshowsDetailComponent;
  let fixture: ComponentFixture<TvshowsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
