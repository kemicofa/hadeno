import BankAccountRepository, {
  BankAccountDTO,
} from "../../application/ports/bankAccountRepository.ts";

const myObjects: string[] = [];

class InMemoryAdapter implements BankAccountRepository {
  getBankAccount(telephone: string): Promise<BankAccountDTO | undefined> {
    return Promise.resolve(
      myObjects.find((input) => JSON.parse(input).telephone === telephone) as
        | BankAccountDTO
        | undefined,
    );
  }

  insertBankAccount(bankAccountDTO: BankAccountDTO) {
    myObjects.push(JSON.stringify({ bankAccountDTO }));
    return Promise.resolve();
  }
}

export default InMemoryAdapter;
