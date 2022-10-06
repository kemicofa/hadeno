import BankAccount from "../domain/bankAccount.ts";
import BankAccountRepository from "../ports/bankAccountRepository.ts";

interface OpenBankAccountDTO {
  name: string;
  telephone: string;
}

class OpenBankAccount {
  #bankAccountRepository: BankAccountRepository;
  constructor(bankAccountRepository: BankAccountRepository) {
    this.#bankAccountRepository = bankAccountRepository;
  }

  async open(dto: OpenBankAccountDTO) {
    const account = new BankAccount(dto.name, dto.telephone);
    await this.#bankAccountRepository.insert({
      name: account.name,
      telephone: account.telephone,
    });
    return account;
  }
}

export default OpenBankAccount;
