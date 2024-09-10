import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigmaPersonalComponent } from './figma-personal.component';

describe('FigmaPersonalComponent', () => {
  let component: FigmaPersonalComponent;
  let fixture: ComponentFixture<FigmaPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FigmaPersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigmaPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
