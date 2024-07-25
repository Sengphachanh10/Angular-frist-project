import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourselfComponent } from './yourself.component';

describe('YourselfComponent', () => {
  let component: YourselfComponent;
  let fixture: ComponentFixture<YourselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourselfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
