import BankAccount from "../domain/bankAccount.ts";
import BankAccountRepository from "../ports/bankAccountRepository.ts";

export interface OpenBankAccountDTO {
  name: string;
  telephone: string;
}

type InsertBankAccountRepository =  Pick<BankAccountRepository, "insertBankAccount">;

class OpenBankAccount {
  #bankAccountRepository: InsertBankAccountRepository;

  constructor(bankAccountRepository: InsertBankAccountRepository) {
    this.#bankAccountRepository = bankAccountRepository;
  }

  async open(dto: OpenBankAccountDTO) {
    const account = new BankAccount(crypto.randomUUID(), dto.name, dto.telephone);
    await this.#bankAccountRepository.insertBankAccount({
      bankAccountId: account.bankAccountId,
      name: account.name,
      telephone: account.telephone,
      createAt: account.createdAt
    });
    return account;
  }
}

export default OpenBankAccount;
