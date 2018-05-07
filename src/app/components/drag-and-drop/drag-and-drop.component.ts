import { Component, OnInit } from '@angular/core';
import { Ng2FileDropAcceptedFile } from 'ng2-file-drop';
import {CloudinaryOptions, CloudinaryUploader} from 'ng2-cloudinary';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions({ cloudName: 'profunding', uploadPreset: 'profunding' })
  );

  constructor() {
    this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
      console.log(item);
      let res: any = JSON.parse(response);
      console.log(res);
      return { item, response, status, headers };
    };
  }

  ngOnInit() {
  }

  public dragFileAccepted(acceptedFile: Ng2FileDropAcceptedFile) {
    console.log(acceptedFile);
    this.uploader.uploadAll();
  }
}
