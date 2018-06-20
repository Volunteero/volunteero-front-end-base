import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverOrganizationComponent } from './discover-organization.component';

describe('DiscoverOrganizationComponent', () => {
  let component: DiscoverOrganizationComponent;
  let fixture: ComponentFixture<DiscoverOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
