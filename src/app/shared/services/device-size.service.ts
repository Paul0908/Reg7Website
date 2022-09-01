import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class DeviceSizeService {

  // https://www.npmjs.com/package/ngx-device-detector

  initService() : Promise<Boolean> {
    return new Promise<Boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 5000);
    });
  }
}
