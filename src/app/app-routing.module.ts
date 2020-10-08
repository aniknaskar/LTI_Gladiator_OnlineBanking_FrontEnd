import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountOpenComponent } from './account-open/account-open.component';
import { AddBenificiaryComponent } from './add-benificiary/add-benificiary.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { ChangeInternetBankingPasswordsComponent } from './change-internet-banking-passwords/change-internet-banking-passwords.component';
import { CustomerAccountStatmentComponent } from './customer-account-statment/customer-account-statment.component';
import { CustomerAccountSummaryComponent } from './customer-account-summary/customer-account-summary.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewAccountRequestsComponent } from './new-account-requests/new-account-requests.component';
import { RegisterInternetBankingComponent } from './register-internet-banking/register-internet-banking.component';
import { UnverifiedUsersComponent } from './unverified-users/unverified-users.component';
import { VerifiedUsersComponent } from './verified-users/verified-users.component';
import { OtpRegistrationComponent } from './otp-registration/otp-registration.component';
import { ForgotUserIdComponent } from './forgot-user-id/forgot-user-id.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { ViewBeneficiaryComponent } from './view-beneficiary/view-beneficiary.component';
import { TransactionSuccessfulComponent } from './transaction-successful/transaction-successful.component';
import { TransactionPasswordComponent } from './transaction-password/transaction-password.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SavedPaymentsComponent } from './saved-payments/saved-payments.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { SessionExpiredComponent } from './session-expired/session-expired.component'; 

const routes: Routes = [
  {path : '', component :  HomePageComponent},
  {path : 'home-page', component :  HomePageComponent},
  {path : 'account-open', component :   AccountOpenComponent},
  {path : 'register-internet', component :    RegisterInternetBankingComponent},
  {path : 'customer-login', component :    CustomerLoginComponent},
  {path : 'admin-login', component :    AdminLoginComponent},
  {path : 'after-login', component :    AfterLoginComponent},
  {path : 'customer-dashboard', component :    CustomerDashboardComponent},
  {path : 'customer-accountStatement', component :    CustomerAccountStatmentComponent},
  {path : 'customer-accountSummary', component :     CustomerAccountSummaryComponent}, 
  {path : 'customer-fundTransfer', component :   FundTransferComponent},
  {path : 'change-password', component :    ChangeInternetBankingPasswordsComponent},
  {path : 'add-benificiary', component :    AddBenificiaryComponent },
  {path : 'admin-dashboard', component :    AdminDashboardComponent },
  {path : 'unverified-users', component :    UnverifiedUsersComponent },
  {path : 'verified-users', component :    VerifiedUsersComponent },
  {path : 'account-requests', component :    NewAccountRequestsComponent },
  {path : 'otp-registration', component :    OtpRegistrationComponent },
  {path : 'forgot-userId', component :    ForgotUserIdComponent },
  {path : 'forgot-password', component :  ForgotPasswordComponent },
  {path : 'set-newPassword', component :  SetNewPasswordComponent },
  {path : 'view-beneficiary', component :  ViewBeneficiaryComponent },
  {path : 'transaction-successful', component :  TransactionSuccessfulComponent },
  {path : 'transaction-password', component :  TransactionPasswordComponent },
  {path : 'about-us', component :  AboutUsComponent },
  {path : 'save-payment', component :  SavedPaymentsComponent },
  {path : 'save-payment', component :  SavedPaymentsComponent },
  {path : 'contact', component :  ContactComponent },
  {path : 'help', component :  HelpComponent },
  {path : 'session-expired', component :  SessionExpiredComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {} 
  export const routingComponents = [HomePageComponent,AccountOpenComponent]

