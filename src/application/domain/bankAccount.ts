import { v4 } from "../../deps.ts";

class BankAccount {
  bankAccountId: string;
  name: string;
  telephone: string;
  createdAt: Date;

  constructor(
    bankAccountId: string,
    name: string,
    telephone: string,
    createdAt = new Date(),
  ) {
    if (!v4.validate(bankAccountId)) {
      throw new Error("Bank account is not a valid v4 uuid");
    }
    if (telephone.length < 10) {
      throw new Error("Telephone needs at least 10 characters");
    }
    this.name = name;
    this.telephone = telephone;
    this.bankAccountId = bankAccountId;
    this.createdAt = createdAt;
  }
}

export default BankAccount;
