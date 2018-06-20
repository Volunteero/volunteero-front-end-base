import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedEventsComponent } from './feed-events.component';

describe('FeedEventsComponent', () => {
  let component: FeedEventsComponent;
  let fixture: ComponentFixture<FeedEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
