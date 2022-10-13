import BankAccount from "../domain/bankAccount.ts";
import BankAccountRepository from "../ports/bankAccountRepository.ts";

type FindBankAccountRepository =  Pick<BankAccountRepository, "getBankAccount">

class FindBankAccount {
  #bankAccountRepository: FindBankAccountRepository;

  constructor(bankAccountRepository: FindBankAccountRepository) {
    this.#bankAccountRepository = bankAccountRepository;
  }

  async find(telephone: string) {
    const bankAccountDTO = await this.#bankAccountRepository.getBankAccount(telephone);
    if (!bankAccountDTO) {
      throw new Error("Could not find bank account");
    }
    return new BankAccount(bankAccountDTO.bankAccountId, bankAccountDTO.name, bankAccountDTO.telephone);
  }
}

export default FindBankAccount;
