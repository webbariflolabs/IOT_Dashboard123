import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private sharedData: any;
  private mobilenum :any;
  private accountId : any;
  private mobino:any;
  private logmob:any;
  private logaccountid:any;
  private devicename: any;
  // private deviceId : any;
  private deviceId:any;

  setData(data: any) {
    this.sharedData = data;
  }

  getData() {
    return this.sharedData;
  }

  sendMobile(mobile:any){
    this.mobilenum = mobile;
  


  }

  getMobile(){
    return this.mobilenum;
  }

  sendAccountId(accountid:any){
    this.accountId = accountid;
  }

  getAccountId(){
    return this.accountId;
  }

  // sendDeviceId(deviceid:any){
  //   this.deviceId = deviceid
  // }

  // getDeviceId(){
  //   return this.deviceId
  // }

  setmob(mobno:any){
    this.mobino = mobno;
 
}

getmob(){
  return this.mobino;
}


loginSetMob(mob_num:any){
  this.logmob = mob_num

}

loginGetMob(){
  return this.logmob
}

sendLoginAccountId(accountid:any)
{
this.logaccountid = accountid;
}

getLoginAccountId(){
  return this.logaccountid
}


sendDevicename(device:any){
  this.devicename = device
}

getDevicename(){
  return this.devicename
}


addId=2
  listcontrol=[

    {id:1,"controlName":'On Off Button'}
  ]

  labelList=[{id:1,'labelname':''}]


  // constructor() { }
  addControlAssign(addName:string){
    this.listcontrol.push({'id':this.addId++,'controlName':addName})
  }

  deletecontrol(index:number){
    this.listcontrol.splice(index,1)
  }

  addlabelId=2


  addforserviceLabel(labelname:string){
    this.labelList.push({'id':this.addlabelId++,'labelname':labelname})
  }
  
  deleteAddService(index:number){
    this.labelList.splice(index,1)
  }

  sendDeviceId(deviceid:any){
    this.deviceId = deviceid

  }

  getDeviceId(){
    return this.deviceId
  }

}
