import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverCampaignComponent } from './discover-campaign.component';

describe('DiscoverCampaignComponent', () => {
  let component: DiscoverCampaignComponent;
  let fixture: ComponentFixture<DiscoverCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoverCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
