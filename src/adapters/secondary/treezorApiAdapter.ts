import { BankAccountDTO } from "../../application/ports/bankAccountRepository.ts";
import ProviderBankApi from "../../application/ports/providerBankAPI.ts";

class TreezorApiAdapter implements ProviderBankApi {
  createBankAccount(
    bankAccountDTO: BankAccountDTO,
  ): Promise<{ providerBankAccountId: string }> {
    throw new Error("Method not implemented.");
  }
  getBankAccount(providerBankAccountId: string): Promise<BankAccountDTO> {
    throw new Error("Method not implemented.");
  }
}

export default TreezorApiAdapter;
