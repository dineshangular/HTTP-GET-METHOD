import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpGetMethodComponent } from './http-get-method.component';

describe('HttpGetMethodComponent', () => {
  let component: HttpGetMethodComponent;
  let fixture: ComponentFixture<HttpGetMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpGetMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpGetMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
