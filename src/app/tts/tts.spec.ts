import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tts } from './tts';

describe('Tts', () => {
  let component: Tts;
  let fixture: ComponentFixture<Tts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
