import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlSegment } from '@angular/router';


@Injectable({
  providedIn: 'root'   
})
export class AuthenticationService {   
  constructor(private http: HttpClient) {}

  login(mobileno: string, password: string) {
    const body = { mobileno, password };
    console.log(body)
    return this.http.post<any>('http://4.188.244.11/login/', body); 
  }

  onSubmitAddUser(userDetails:any){
    console.log(userDetails);
    return this.http.post<any>('http://4.188.244.11/user/',userDetails)
  }



  
  getData() {
    return this.http.get('http://4.188.244.11/user_view/');
  }


  editUserData(userData:any){
    const userDetails = {mobileno: userData[1], newusername: userData[0], newuseremail: userData[3], usertype: userData[2]};

    return this.http.post<any>('http://4.188.244.11/user_edit/', userDetails)
  }


  onSubmitAccountCreate(accountData:any){
    console.log(accountData)
    return this.http.post<any>('http://4.188.244.11/account/',accountData)

  }
  

  onGetAccounts(mobno:any){
    console.log(mobno);
    return this.http.get(`http://4.188.244.11/account_view/${mobno.mobileno}/`,)
  }

  onEditAccounts(accounts:any){
    console.log(accounts);
    const accountBody = {accountid: accounts[1],newaccountname: accounts[0]};
    return this.http.post<any>('http://4.188.244.11/account_edit/',accountBody);
  }


  onAddNewDevice(deviceDetails:any){
    console.log(deviceDetails);
    return this.http.post<any>('http://4.188.244.11/device_create/',deviceDetails);
  }



  onFetchDevices(accountid:any){
    console.log(accountid);
    return this.http.get(`http://4.188.244.11/device_view/${accountid}/`,);

  }

  onClickEditDevices(devicedetails:any){
    console.log(devicedetails)
    return this.http.post('http://4.188.244.11/device_edit/',devicedetails)
  }


DeleteUser(mobileno:any){
  const userDelete = {mobileno}
  return this.http.post<any>('http://4.188.244.11/user_delete/',userDelete)

}

DeleteAccount(accountid:any){
  const deleteaccount= {accountid}
  return this.http.post<any>('http://4.188.244.11/account_delete/', deleteaccount)

}

onDeviceDelete(deviceid:any){
  const deletedevice = {deviceid}
  return this.http.post<any>('http://4.188.244.11/device_delete/', deletedevice)

}


onPermissionsCreate(permissions:any){
  console.log(permissions)
  return this.http.post<any>(`http://4.188.244.11/permission/${permissions.userid}/`,permissions)
}


onFetchpermissions(mobileno:any){

  return this.http.get(`http://4.188.244.11/permission/${mobileno}/`)
}


onPostDevices(devicetype:any){
  console.log(devicetype)
  return this.http.post<any>('http://4.188.244.11/devicetype_create/',devicetype)
}

onGetDeviceTypes(){
  return this.http.get('http://4.188.244.11/devicetype_view/')
}

onEditDeviceDetails(devicedetails:any){
  console.log(devicedetails)
  return this.http.post<any>('http://4.188.244.11/devicetype_edit/', devicedetails)
}

DeleteDevicetype(devicedelete:any){
  console.log(devicedelete)
  return this.http.post('http://4.188.244.11/devicetype_delete/', devicedelete)
}


onDeviceSlider(devicedetails:any){
  console.log(devicedetails)
  return this.http.post<any>('http://4.188.244.11/slider_control/', devicedetails)
}

onDeviceLineGraph(devicedetails:any){
  console.log(devicedetails)
  return this.http.post<any>('http://4.188.244.11/graph_control/', devicedetails)
}

onDeviceOnOff(buttondetails:any){
  console.log(buttondetails)
  return this.http.post<any>('http://4.188.244.11/on_off_control/', buttondetails)
}

onAssignedControlsView(type_name:any,type_ver:any){
console.log(type_name)
console.log(type_ver)
return this.http.get<any>(`http://4.188.244.11/controls_view/${type_name}/${type_ver}/`)
}


}