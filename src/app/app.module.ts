import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { HomePageComponent } from './home-page/home-page.component';
import { AccountOpenComponent } from './account-open/account-open.component';
import { RegisterInternetBankingComponent } from './register-internet-banking/register-internet-banking.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerAccountStatmentComponent } from './customer-account-statment/customer-account-statment.component';
import { CustomerAccountSummaryComponent } from './customer-account-summary/customer-account-summary.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
 
import { ChangeInternetBankingPasswordsComponent } from './change-internet-banking-passwords/change-internet-banking-passwords.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UnverifiedUsersComponent } from './unverified-users/unverified-users.component';
import { VerifiedUsersComponent } from './verified-users/verified-users.component';
import { NewAccountRequestsComponent } from './new-account-requests/new-account-requests.component';
import { OtpRegistrationComponent } from './otp-registration/otp-registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotUserIdComponent } from './forgot-user-id/forgot-user-id.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { AddBenificiaryComponent } from './add-benificiary/add-benificiary.component';
import { ViewBeneficiaryComponent } from './view-beneficiary/view-beneficiary.component';
import { TransactionSuccessfulComponent } from './transaction-successful/transaction-successful.component';
import { TransactionPasswordComponent } from './transaction-password/transaction-password.component';
import { SavedPaymentsComponent } from './saved-payments/saved-payments.component';
import { SessionExpiredComponent } from './session-expired/session-expired.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AccountOpenComponent,
    RegisterInternetBankingComponent,
    CustomerLoginComponent,
    AdminLoginComponent,
    AfterLoginComponent,
    CustomerDashboardComponent,
    CustomerAccountStatmentComponent,
    CustomerAccountSummaryComponent,
    FundTransferComponent,
    AddBenificiaryComponent,
    ChangeInternetBankingPasswordsComponent,
    AdminDashboardComponent,
    UnverifiedUsersComponent,
    VerifiedUsersComponent,
    NewAccountRequestsComponent,
    OtpRegistrationComponent,
    ForgotPasswordComponent,
    ForgotUserIdComponent,
    SetNewPasswordComponent,
    ViewBeneficiaryComponent,
    TransactionSuccessfulComponent,
    TransactionPasswordComponent,
    SavedPaymentsComponent,
    SessionExpiredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,HttpClientModule
  
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
