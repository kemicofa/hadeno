import BankAccount from "../domain/bankAccount.ts";
import BankAccountRepository from "../ports/bankAccountRepository.ts";
import ProviderBankApi from "../ports/providerBankAPI.ts";

export interface OpenBankAccountDTO {
  name: string;
  telephone: string;
}

type InsertBankAccountRepository = Pick<
  BankAccountRepository,
  "insertBankAccount"
>;
type CreateProviderBankApi = Pick<ProviderBankApi, "createBankAccount">;

class OpenBankAccount {
  #bankAccountRepository: InsertBankAccountRepository;
  #providerBankApi: CreateProviderBankApi;

  constructor(
    bankAccountRepository: InsertBankAccountRepository,
    providerBankApi: CreateProviderBankApi,
  ) {
    this.#bankAccountRepository = bankAccountRepository;
    this.#providerBankApi = providerBankApi;
  }

  async open(dto: OpenBankAccountDTO) {
    const account = new BankAccount(
      crypto.randomUUID(),
      dto.name,
      dto.telephone,
    );
    await this.#bankAccountRepository.insertBankAccount({
      bankAccountId: account.bankAccountId,
      name: account.name,
      telephone: account.telephone,
      createAt: account.createdAt,
    });
    return account;
  }
}

export default OpenBankAccount;
