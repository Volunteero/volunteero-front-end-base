import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedCampaignsComponent } from './feed-campaigns.component';

describe('FeedCampaignsComponent', () => {
  let component: FeedCampaignsComponent;
  let fixture: ComponentFixture<FeedCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
