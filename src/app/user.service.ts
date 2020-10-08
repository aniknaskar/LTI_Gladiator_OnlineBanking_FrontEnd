import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './userModel';
import {Login} from './loginModel';
import { internetBanking } from './internetBankingModel';
import { userInfo } from './userModel';
import {Beneficiary} from './benificiary';
import {ChangeLoginPassword} from './changeloginpassword';
import {ChangeTransactionPassword} from './changetransactionpassword'
import{Transaction} from './transaction';
import{TransactionResponse} from './transactionresponse';
import{OTP} from './otp';
import { from } from 'rxjs';
import { GetTransaction } from './gettransaction';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  baseUrl:string= "http://localhost:9091/App/users"
  constructor(private http:HttpClient ) { }

  createNewUser(user:User)
  {
    return this.http.post("http://localhost:9091/Digiseva/user/createuser",user);
  }

  getUsersById(loginId:string) {
    return this.http.post<Login>("http://localhost:9091/Digiseva/customerlogin/getlogin",loginId);
  }

  createInternetBankingUser(user: internetBanking) {
    return this.http.post<OTP>("http://localhost:9091/Digiseva/customerlogin/createlogin", user);
  }



  getUsers(){
    return this.http.get<userInfo[]>("http://localhost:9091/Digiseva/user/getallunverifieduser");
  }
  postUserInfo(user:userInfo){

    return this.http.post("http://localhost:9091/Digiseva/user/verifyuser",user);
  }

  unlockAccount(internetBankingId:string)
  {
    return this.http.post("http://localhost:9091/Digiseva/customerlogin/unlockaccount",internetBankingId);
  }

  addBenificiaryAccount(benificiary: Beneficiary) {
    benificiary.customerAccountNumber=localStorage.getItem("accountNumber");
    alert(JSON.stringify(benificiary));
    return this.http.post("http://localhost:9091/Digiseva/transaction/addbeneficiary", benificiary);
  }

  changeLoginPassword(changeLoginPassword :ChangeLoginPassword)
  {
    changeLoginPassword.internetBankingId=localStorage.getItem("internetBankingId");
      return this.http.post("http://localhost:9091/Digiseva/customerlogin/changeloginpassword",changeLoginPassword);
  }

  changeTransactionPassword(changeTransactionPassword:ChangeTransactionPassword)
  {
    changeTransactionPassword.accountNumber=localStorage.getItem("accountNumber");
    return this.http.post("http://localhost:9091/Digiseva/accountinfo/changetransactionpassword",changeTransactionPassword);
  }

  forgotLoginPassword(internetBankingId :string)
  {
    return this.http.post<string>("http://localhost:9091/Digiseva/customerlogin/forgotpassword",internetBankingId);
  }

  forgotInternetBankingId(accountNumber:string)
  {
    return this.http.post<string>("http://localhost:9091/Digiseva/customerlogin/forgotid",accountNumber);
  }

  sendInternetBankingId(accountNumber:string)
  {
    return this.http.post("http://localhost:9091/Digiseva/customerlogin/sendid",accountNumber);
  }

  getAdminById(adminId:string) {
    return this.http.post<Login>("http://localhost:9091/Digiseva/admininfo/adminid",adminId);
  }

  transactionProcess(transaction:Transaction)
  {
       return this.http.post<number>("http://localhost:9091/Digiseva/transaction/addtransaction",transaction);
  }

  checkTransaction(transaction:Transaction)
  {
    transaction.amount=localStorage.getItem("amount");
    transaction.beneficiaryAccountNumber = localStorage.getItem("beneficiaryAccountNumber");
    transaction.dateOfPayment = localStorage.getItem("dateOfPayment");
    transaction.modeOfTransaction = localStorage.getItem("modeOfTransaction");
    transaction.customerAccountNumber=localStorage.getItem("accountNumber"); 
    return this.http.post<TransactionResponse>("http://localhost:9091/Digiseva/transaction/checktransaction",transaction);
  }

  savePayments(transaction:Transaction)
  {
    transaction.modeOfTransaction=localStorage.getItem("modeOfTransaction");
    transaction.customerAccountNumber=localStorage.getItem("accountNumber")
    return this.http.post("http://localhost:9091/Digiseva/transaction/addsavedpayment",transaction);
  }
  getAccountBalance()
  {
    let accountNumber=localStorage.getItem("accountNumber");
    return this.http.post<number>("http://localhost:9091/Digiseva/accountinfo/getaccountbalance",accountNumber);
  }


  getStatements(){
    let accountNumber:string=localStorage.getItem("accountNumber");
    return this.http.post<Transaction[]>("http://localhost:9091/Digiseva/transaction/getalltransactions",accountNumber);
  }


  //for fetching users, who are approved by admin
  getVerifiedUsers(){
    return this.http.get<userInfo[]>("http://localhost:9091/Digiseva/user/getallverifieduser");
  }

  getUnVerifiedUsers(){
    return this.http.get<userInfo[]>("http://localhost:9091/Digiseva/user/getallrejecteduser");
  }
  viewBeneficiary()
  {
    let accountNumber:string=localStorage.getItem("accountNumber");
    return this.http.post<Beneficiary[]>("http://localhost:9091/Digiseva/transaction/getallbeneficiaries",accountNumber);
  }

  viewSavedPayment()
  {
    let accountNumber:string=localStorage.getItem("accountNumber");
    return this.http.post<Transaction[]>("http://localhost:9091/Digiseva/transaction/getallsavedpayments",accountNumber);
  }

  lockAccount()
  {
    let internetBankingId:string=localStorage.getItem("internetBankingId")
    return this.http.post("http://localhost:9091/Digiseva/customerlogin/lockaccount",internetBankingId);
  }

  updateNumberOfAttemptedLogin()
  {
    alert(localStorage.getItem("internetBankingId"))
   
    return this.http.post("http://localhost:9091/Digiseva/customerlogin/addnumberoflogin",localStorage.getItem("internetBankingId"));
  }

  deleteSavedPayment(trans:Transaction)
  {
    return this.http.post("http://localhost:9091/Digiseva/transaction/deletesavedpayment",trans);
  }

  getStatementsByDate(getTransaction:GetTransaction)
  {
    return this.http.post<Transaction[]>("http://localhost:9091/Digiseva/transaction/getalltransactionswithdate",getTransaction);
  }
}
