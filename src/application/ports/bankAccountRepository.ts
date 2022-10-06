export interface BankAccountDTO {
  name: string;
  telephone: string;
  createAt: Date;
}

interface BankAccountRepository {
  insert(obj: { name: string; telephone: string }): Promise<void>;
  get(telephone: string): Promise<BankAccountDTO | undefined>;
}

export default BankAccountRepository;
