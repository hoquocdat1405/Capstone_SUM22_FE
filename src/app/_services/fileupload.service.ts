import { Observable } from 'rxjs';
import { FileUpload } from './../_model/file';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  private basePath = '/user';

  constructor(
    private db: AngularFireDatabase, 
    private storage: AngularFireStorage,
  ) { }

  pushFileToStorage(userId: string, fileRole: string, fileUpload: FileUpload): Observable<any> {
    const file = fileUpload.file?.type;
    console.log(file)
    const filePath = `${this.basePath}/${userId + "_" + fileRole}`;
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    // uploadTask.snapshotChanges().pipe(
    //   finalize(() => {
    //     storageRef.getDownloadURL().subscribe(downloadURL => {
    //       fileUpload.url = downloadURL;
    //       fileUpload.name = fileUpload.file!.name;
    //       this.saveFileData(fileUpload);
    //     });
    //   })
    // ).subscribe();

    return uploadTask.percentageChanges();
  }

  getFile(userId: string, fileRole: string): Observable<any> {
    const filePath = `${this.basePath}/${userId + "_" + fileRole}`;
    return this.storage.ref(filePath).getDownloadURL();
  }

  delete(userId: string, fileRole: string) {
    const filePath = `${this.basePath}/${userId + "_" + fileRole}`;
    this.storage.ref(filePath).delete();
  }

  // getFiles(): AngularFireList<FileUpload> {
  //   return this.db.list(this.basePath);
  // }

  deleteFile(fileUpload: FileUpload): void {
    this.deleteFileDatabase(fileUpload.key!)
      .then(() => {
        this.deleteFileStorage(fileUpload.name!);
      })
      .catch(error => console.log(error));
  }

  private deleteFileDatabase(key: string): Promise<void> {
    return this.db.list(this.basePath).remove(key);
  }

  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath);
    storageRef.child(name).delete();
  }
}
