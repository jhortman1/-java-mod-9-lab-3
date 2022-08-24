import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderMessageCountComponentComponent } from './sender-message-count-component.component';

describe('SenderMessageCountComponentComponent', () => {
  let component: SenderMessageCountComponentComponent;
  let fixture: ComponentFixture<SenderMessageCountComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenderMessageCountComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderMessageCountComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
