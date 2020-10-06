export class Login {
    public internetBankingId : string;
    public loginPassword : string;
    public accountNumber:string;
    public customerName:string;
    public accountBalance:string
    public transactionPassword:string;

    constructor(internetBankingId : string,customerLoginPassword : string,accountNumber:string,customerName:string,accountBalance:string,transactionPassword:string)
    {
        this.internetBankingId=internetBankingId;
        this.loginPassword=customerLoginPassword;
        this.customerName=customerName;
        this.accountNumber=accountNumber;
        this.accountBalance=accountBalance;
        this.transactionPassword=transactionPassword;
    }

   
    

}