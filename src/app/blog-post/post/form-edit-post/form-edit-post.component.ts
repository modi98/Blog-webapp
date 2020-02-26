import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-form-edit-post',
  templateUrl: './form-edit-post.component.html',
  styleUrls: ['./form-edit-post.component.scss']
})
export class FormEditPostComponent implements OnInit {

  @Input() public postObject;
  @Output() close = new EventEmitter<boolean>();
  @Output() update = new EventEmitter<Post>();
  public editingPost;

  constructor() { }

  ngOnInit(): void {
    this.editingPost = Object.assign({}, this.postObject);
    let modal = document.getElementById('editModal');
    let vm = this;

    let span = document.getElementById('closeEdit');
    span.onclick = function() {
      vm.closeEditModal();
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        vm.closeEditModal()
      }
    }
  }

  updatePost() {
    this.update.emit(this.editingPost);
    this.closeEditModal();
  }

  closeEditModal() {
    this.close.emit(false);
  }
}
