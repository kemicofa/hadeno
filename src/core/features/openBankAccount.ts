import BankAccount from "../domain/bankAccount.ts";
import BankAccountRepository from "../repositories/bankAccountRepository.ts";

export interface OpenBankAccountDTO {
  name: string;
  telephone: string;
}

class OpenBankAccount {
  #bankAccountRepository: BankAccountRepository;

  constructor(
    bankAccountRepository: BankAccountRepository,
  ) {
    this.#bankAccountRepository = bankAccountRepository;
  }

  async execute(dto: OpenBankAccountDTO) {
    const account = new BankAccount(
      crypto.randomUUID(),
      dto.name,
      dto.telephone,
    );
    await this.#bankAccountRepository.insert(account);
    return account;
  }
}

export default OpenBankAccount;
