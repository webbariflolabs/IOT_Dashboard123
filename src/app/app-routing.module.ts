import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActionComponent } from './action/action.component';
import { UsersComponent } from './users/users.component';
import { Action1Component } from './users/action/action1/action1.component';
import { SettingsComponent } from './settings/settings.component';
import { Action2Component } from './settings/action2/action2/action2.component';
import { Edit5Component } from './action/edit5/edit5/edit5.component';
import { StatComponent } from './action/statistics/stat/stat.component';
import { NewdevicesComponent } from './newdevices/newdevices.component';
import { AccountDevicesComponent } from './account-devices/account-devices.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { UserPermissionsComponent } from './user-permissions/user-permissions.component';
import { AdminNewDeviceComponent } from './admin-new-device/admin-new-device.component';
import { AdminDeviceTypesComponent } from './admin-device-types/admin-device-types.component';
import { AdminCreateNewDeviceComponent } from './admin-create-new-device/admin-create-new-device.component';
import { UserAccountsComponent } from './user-accounts/user-accounts.component';
import { UserAccountDevicesComponent } from './user-account-devices/user-account-devices.component';
import { UserNewDeviceComponent } from './user-new-device/user-new-device.component';
import { DeviceAssignControlsComponent } from './device-assign-controls/device-assign-controls.component';
import { DeviceStatsComponent } from './device-stats/device-stats.component';

import { GeneralUsersComponent } from './general-users/general-users.component';
import { MqttDeviceComponent } from './mqtt-device/mqtt-device.component';
import { GeneralUserStatsComponent } from './general-user-stats/general-user-stats.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { UsersCheckComponent } from './users-check/users-check.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginPasswordComponent } from './login-password/login-password.component';
import { ForgotCheckComponent } from './forgot-check/forgot-check.component';
import { SuperDashboardComponent } from './super-dashboard/super-dashboard.component';
import { SuperParameterComponent } from './super-parameter/super-parameter.component';
import { GeneralUserCreateComponent } from './general-user-create/general-user-create.component';
import { UsersVerifyComponent } from './users-verify/users-verify.component';
import { GeneralDashboardComponent } from './general-dashboard/general-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { RegisterOneComponent } from './register-one/register-one.component';
import { RegisterTwoComponent } from './register-two/register-two.component';
import { RegisterThreeComponent } from './register-three/register-three.component';
import { RegisterFourComponent } from './register-four/register-four.component';
import { ForgotEmailCheckComponent } from './forgot-email-check/forgot-email-check.component';
import { ForgotEmailComponent } from './forgot-email/forgot-email.component';
import { AdminDeviceStatsComponent } from './admin-device-stats/admin-device-stats.component';
import { PasswordSuccessComponent } from './password-success/password-success.component';
import { DeviceGraphStatComponent } from './device-graph-stat/device-graph-stat.component';
import { GeneralUserGraphComponent } from './general-user-graph/general-user-graph.component';


const routes: Routes = [
  {path:"", redirectTo:'/login', pathMatch:"full"},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {
    path: 'dashboard-dialog',
    loadChildren: () => import('./dashboard/dashboard-dialog.module').then(m => m.DashboardDialogModule),
  },
  {path:'action',component:ActionComponent},
  {path:'users',component:UsersComponent},
  {path:'action1',component:Action1Component},
  {path:'settings',component:SettingsComponent},
  {path:'action2',component:Action2Component},
  {path:'edit5',component:Edit5Component},
  {path:'stat',component:StatComponent},
  {path: 'newdevices', component: NewdevicesComponent },
  {path: 'account-devices', component:AccountDevicesComponent},
  {path: 'admin-users', component: AdminUsersComponent},
  {path: 'user-permissions', component: UserPermissionsComponent},
  {path: 'admin-new-device', component: AdminNewDeviceComponent},
  {path: 'admin-device-types', component: AdminDeviceTypesComponent},
  {path: 'admin-create-new-device', component:AdminCreateNewDeviceComponent},
  {path: 'user-accounts', component:UserAccountsComponent},
  {path: 'user-account-devices', component: UserAccountDevicesComponent},
  {path: 'user-new-device', component:UserNewDeviceComponent},
  {path: 'device-assign-controls', component:DeviceAssignControlsComponent},
  {path: 'device-stats', component:DeviceStatsComponent},
  {path: 'general-users', component:GeneralUsersComponent},
  {path: 'mqtt-device', component:MqttDeviceComponent},
  {path: 'general-user-stats', component:GeneralUserStatsComponent},
  {path: 'register-page', component: RegisterPageComponent},
  {path:'profile-page', component: ProfilePageComponent},
  {path:'users-check', component:UsersCheckComponent},
  {path:'super-admin', component:SuperAdminComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'login-password', component: LoginPasswordComponent},
  {path: 'forgot-check', component:ForgotCheckComponent},
  {path: 'super-dashboard',component:SuperDashboardComponent},
  {path:'super-parameter', component:SuperParameterComponent},
  {path:'general-user-create', component:GeneralUserCreateComponent},
  {path:'users-verify', component:UsersVerifyComponent},
  {path:'general-dashboard', component:GeneralDashboardComponent},
  {path:'register', component:RegisterComponent},
  {path:'register-one', component:RegisterOneComponent},
  {path:'register-two', component:RegisterTwoComponent},
  {path:'register-three', component:RegisterThreeComponent},
  {path:'register-four', component:RegisterFourComponent},
  {path:'forgot-email',component:ForgotEmailComponent},
  {path:'forgot-email-check', component:ForgotEmailCheckComponent},
  {path:'admin-device-stats', component:AdminDeviceStatsComponent},
  {path:'password-success', component:PasswordSuccessComponent},
  {path:'device-graph-stat', component: DeviceGraphStatComponent},
  {path:'general-user-graph', component:GeneralUserGraphComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
