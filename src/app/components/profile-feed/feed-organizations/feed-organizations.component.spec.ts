import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedOrganizationsComponent } from './feed-organizations.component';

describe('FeedOrganizationsComponent', () => {
  let component: FeedOrganizationsComponent;
  let fixture: ComponentFixture<FeedOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
