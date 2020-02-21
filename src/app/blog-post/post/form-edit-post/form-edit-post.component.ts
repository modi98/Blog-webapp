import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form-edit-post',
  templateUrl: './form-edit-post.component.html',
  styleUrls: ['./form-edit-post.component.scss']
})
export class FormEditPostComponent implements OnInit {

  @Input() public postObject;
  @Output() close = new EventEmitter<boolean>();
  public editingPost = new Post(0, 'Hey', '', '', '', '', '', []);

  constructor(private _api: ApiService) { }

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
    this._api.updatePost(this.editingPost);
    let modal = document.getElementById('editModal');
    modal.style.display = 'none';
  }

  closeEditModal() {
    this.close.emit(false);
  }
}
