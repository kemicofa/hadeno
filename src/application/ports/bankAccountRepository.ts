export interface BankAccountDTO {
  bankAccountId: string;
  name: string;
  telephone: string;
  createAt: Date;
}

interface BankAccountRepository {
  insertBankAccount(bankAccountDTO: BankAccountDTO): Promise<void>;
  getBankAccount(telephone: string): Promise<BankAccountDTO | undefined>;
}

export default BankAccountRepository;
