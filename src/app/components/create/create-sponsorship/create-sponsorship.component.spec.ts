import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSponsorshipComponent } from './create-sponsorship.component';

describe('CreateSponsorshipComponent', () => {
  let component: CreateSponsorshipComponent;
  let fixture: ComponentFixture<CreateSponsorshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSponsorshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSponsorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
