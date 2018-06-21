import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorInfoOverviewComponent } from './creator-info-overview.component';

describe('CreatorInfoOverviewComponent', () => {
  let component: CreatorInfoOverviewComponent;
  let fixture: ComponentFixture<CreatorInfoOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorInfoOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorInfoOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
