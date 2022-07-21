import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceSizeService {

  constructor() { }












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
