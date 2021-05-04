import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators'
import { ImageService } from 'src/app/shared/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  imgSrc! : string;
  img_src! : string;
  selectedImage: any = null;
  selectedImage2: any = null;
  isSubmitted:boolean = false;

  formTemplate = new FormGroup({
    caption : new FormControl('', Validators.required),
    author : new FormControl('', Validators.required),
    imageUrl : new FormControl('', Validators.required),
    author_email: new FormControl('', Validators.required),
    authorUrl: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required)
  })

  constructor(private storage: AngularFireStorage, private service:ImageService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  showPreview(event:any) {
    if(event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e:any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    }
    else {
      this.imgSrc = '/src/assets/img/image_placeholder.jpg';
      this.selectedImage = null;
    }
  }

  showPreview2(event:any) {
    if(event.target.files && event.target.files[0]) {
      const read = new FileReader();
      read.onload = (e:any) => this.img_src = e.target.result;
      read.readAsDataURL(event.target.files[0]);
      this.selectedImage2 = event.target.files[0];
    }
    else {
      this.img_src = '/src/assets/img/Upload-photo-image.png';
      this.selectedImage2 = null;
    }
  }

  onSubmit(formValue:any) {
    this.isSubmitted = true;
    if(this.formTemplate.valid) {
      var filePath = `Content/${this.selectedImage.name.split('.').slice(0,-1).join('.')}_${new Date().getTime()}`;
      var filePath2 = `Author/${this.selectedImage2.name.split('.').slice(0,-1).join('.')}_${new Date().getTime()}`
      const fileRef = this.storage.ref(filePath);
      const authRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage, this.selectedImage2).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            // formValue['authorUrl'] = url;
            this.service.insertImageDetails(formValue );
            this.resetForm();
          })
          authRef.getDownloadURL().subscribe((url) => {
            formValue['authorUrl'] = url;
            this.service.insertImageDetails(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      imageUrl: '',
      author: '',
      author_email: '',
      authorUrl: '',
      title:''
    });
    this.imgSrc = '/src/assets/img/image_placeholder.jpg';
    this.img_src = '/src/assets/img/Upload-photo-image.png';
    this.selectedImage = null;
    this.selectedImage2 = null;
    this.isSubmitted = false;
  }

}
