import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent,  } from './dashboard/dashboard.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardModule } from './dashboard/dashboard.module';
import { CardModule } from './dashboard/card/card/card.module';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatExpansionModule } from '@angular/material/expansion';
import { ActionComponent } from './action/action.component';
import { EditModule } from './dashboard/edit/edit.module';
import { UsersComponent } from './users/users.component';
import { NewusersComponent } from './users/new-users/newusers/newusers.component';
import { MatSelectModule } from '@angular/material/select';
import { Action1Module } from './users/action/action1/action1.module';
import { SettingsComponent } from './settings/settings.component';
import { Edit3Module } from './settings/edit3/edit3/edit3.module';
import { Action2Module } from './settings/action2/action2/action2.module';
import { Edit4Module } from './settings/action2/action2/edit4/edit4/edit4.module';
import { StatModule } from './action/statistics/stat/stat.module';
import { NgChartsModule } from 'ng2-charts';
import { LoginModule } from './login/login.module';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { DialogContent1Component } from './dialog-content1/dialog-content1.component';
import { DialogContent2Component } from './dialog-content2/dialog-content2.component';
import { DialogContent3Component } from './dialog-content3/dialog-content3.component';
import { NewdevicesComponent } from './newdevices/newdevices.component';
import { AccountDevicesComponent } from './account-devices/account-devices.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserPermissionsComponent } from './user-permissions/user-permissions.component';
import { AdminNewDeviceComponent } from './admin-new-device/admin-new-device.component';
import { AdminDeviceTypesComponent } from './admin-device-types/admin-device-types.component';
import { AdminCreateNewDeviceComponent } from './admin-create-new-device/admin-create-new-device.component';
import { UserAccountsComponent } from './user-accounts/user-accounts.component';
import { UserAccountDevicesComponent } from './user-account-devices/user-account-devices.component';
import { UserNewDeviceComponent } from './user-new-device/user-new-device.component';
import { DeviceAssignControlsComponent } from './device-assign-controls/device-assign-controls.component';
import { DeviceStatsComponent } from './device-stats/device-stats.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';



@NgModule({
  declarations: [
    AppComponent,
    ActionComponent,
    UsersComponent,
    NewusersComponent,
    SettingsComponent,
    DialogContentComponent,
    DialogContent1Component,
    DialogContent2Component,
    DialogContent3Component,
    NewdevicesComponent,
    AccountDevicesComponent,
    DeviceEditComponent,
    AdminUsersComponent,
    AddNewUserComponent,
    EditUserComponent,
    UserPermissionsComponent,
    AdminNewDeviceComponent,
    AdminDeviceTypesComponent,
    AdminCreateNewDeviceComponent,
    UserAccountsComponent,
    UserAccountDevicesComponent,
    UserNewDeviceComponent,
    DeviceAssignControlsComponent,
    DeviceStatsComponent,
    UserDeleteComponent,
    

    // DashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    // FlexLayoutModule,
    MatSnackBarModule,
    MatSidenavModule,
    CommonModule,
    MatCheckboxModule,
    MatDialogModule,
    DashboardModule,
    CardModule,
    HttpClientModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    NgbModule,
    EditModule,
    MatSelectModule,
    Action1Module,
    Edit3Module,
    Action2Module,
    Edit4Module,
    StatModule,
    NgChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
