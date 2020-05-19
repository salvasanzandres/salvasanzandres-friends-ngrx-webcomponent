import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SillyComponentComponent } from './silly-component.component';

describe('SillyComponentComponent', () => {
  let component: SillyComponentComponent;
  let fixture: ComponentFixture<SillyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SillyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SillyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
