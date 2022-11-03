import { Injectable } from '@angular/core';
// import { drive_v3, google } from 'googleapis';
import { environment } from 'src/environments/environment';
// import path from 'path';
// import fs from 'fs';

@Injectable({
  providedIn: 'root',
})
export class DriveApisService {
  // drive?:drive_v3.Drive;
  // filePath = path.join(__dirname, '../../assets/img/mbti-fhd.jpg')

  // oauth2Client = new google.auth.OAuth2(
  //   environment.CLIENT_ID,
  //   environment.CLIENT_SECRET,
  //   environment.REDIRECT_URI
  // );

  constructor() {
    // this.oauth2Client.setCredentials({
    //   refresh_token: environment.REFRESH_TOKEN
    // })
    // this.drive = google.drive({
    //   version: 'v3',
    //   auth: this.oauth2Client
    // })
  }

  // async uploadFile() {
  //   try {
  //     const response = await this.drive?.files.create({
  //       requestBody: {
  //         name: 'test.jpg',
  //         mimeType: 'image/jpg'
  //       },
  //       media: {
  //         mimeType: 'image/jps',
  //         body: fs.createReadStream(this.filePath)
  //       }
  //     })
  //     console.log(response?.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
}
