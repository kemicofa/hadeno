import BankAccount from "../domain/bankAccount.ts";
import BankAccountRepository from "../ports/bankAccountRepository.ts";

class FindBankAccount {
  #bankAccountRepository: Pick<BankAccountRepository, "get">;

  constructor(bankAccountRepository: Pick<BankAccountRepository, "get">) {
    this.#bankAccountRepository = bankAccountRepository;
  }

  async find(telephone: string) {
    const bankAccountDTO = await this.#bankAccountRepository.get(telephone);
    if (!bankAccountDTO) {
      throw new Error("Could not find bank account");
    }
    return new BankAccount(bankAccountDTO.name, bankAccountDTO.telephone);
  }
}

export default FindBankAccount;
