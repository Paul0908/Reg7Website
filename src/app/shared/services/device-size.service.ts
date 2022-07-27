import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceSizeService {

  constructor() { }



//https://www.npmjs.com/package/ngx-device-detector









  initService() : Promise<Boolean>
  {
    return new Promise<Boolean>((resolve)=>{
      setTimeout(() => {
        console.log("Service is running");
        resolve(true);
      }, 5000);
    });
  }


}
