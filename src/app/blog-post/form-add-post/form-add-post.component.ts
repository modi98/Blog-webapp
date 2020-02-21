import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-post',
  templateUrl: './form-add-post.component.html',
  styleUrls: ['./form-add-post.component.scss']
})
export class FormAddPostComponent implements OnInit {

  @Output() newPostCreated = new EventEmitter<Post>();
  postForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
    imgUrl: new FormControl(),
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  resetForm() {
    this.postForm = this.fb.group({
      title: [ null, Validators.required ],
      description: [ null, Validators.required ],
      category: [ 'travel', Validators.required ],
      imgUrl: [ 'https://i.picsum.photos/id/1004/5616/3744.jpg', Validators.required ]
    })
  }

  showModal() {
    this.resetForm();
    let modal = document.getElementById('myModal');
    modal.style.display = 'block';

    let span = document.getElementById('close');
    span.onclick = function() {
      modal.style.display = 'none';
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  }

  savePost() {
    let newId = Math.floor(Math.random() * 6000) + 1;
    this.newPostCreated.emit(new Post(
      newId,
      this.postForm.get('title').value,
      this.postForm.get('category').value,
      '',
      this.postForm.get('description').value,
      '',
      this.postForm.get('imgUrl').value,
      []));
    let modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
}
