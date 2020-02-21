import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddPostComponent } from './form-add-post.component';

describe('FormAddPostComponent', () => {
  let component: FormAddPostComponent;
  let fixture: ComponentFixture<FormAddPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
