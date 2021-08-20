// OOP

function Checking(amount) {
    this.balance = amount; //property
    this.deposit = deposit; //function
    this.withdraw = withdraw //function
    this.toString = toString //function
  }
  
  // the this keyword is used to tie each function and property to an object instance.
  
  function deposit(amount) {
    this.balance += amount;
  }
  
  function withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
    if (amount > this.balance) {
      console.log("Insuficient funds");
    }
  }
  
  function toString() {
    return "Balance: " + this.balance;
  }
  
  let account = new Checking(500);
  account.deposit(1000);
  console.log(account.toString());
  account.withdraw(750);
  console.log(account.toString());
  account.withdraw(800);
  console.log(account.toString());
  
  /* 
  Result:
  Balance: 1500
  Balance: 750
  Insuficient funds
  Balance: 750
  */