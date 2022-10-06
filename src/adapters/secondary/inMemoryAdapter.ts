import BankAccountRepository, {
  BankAccountDTO,
} from "../../application/ports/bankAccountRepository.ts";

const myObjects: string[] = [];

class InMemoryAdapter implements BankAccountRepository {
  get(telephone: string): Promise<BankAccountDTO | undefined> {
    return Promise.resolve(
      myObjects.find((input) => JSON.parse(input).telephone === telephone) as
        | BankAccountDTO
        | undefined,
    );
  }

  insert(obj: { name: string; telephone: string }) {
    myObjects.push(JSON.stringify({ obj }));
    return Promise.resolve();
  }
}

export default InMemoryAdapter;
