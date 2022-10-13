import { BankAccountDTO } from "./bankAccountRepository.ts";

interface ProviderBankApi {
  createBankAccount(
    bankAccountDTO: BankAccountDTO,
  ): Promise<{ providerBankAccountId: string }>;
  getBankAccount(providerBankAccountId: string): Promise<BankAccountDTO>;
}

export default ProviderBankApi;
