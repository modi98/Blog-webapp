import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditPostComponent } from './form-edit-post.component';

describe('FormEditPostComponent', () => {
  let component: FormEditPostComponent;
  let fixture: ComponentFixture<FormEditPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
