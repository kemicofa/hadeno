import BankAccountRepository from "../../application/ports/bankAccountRepository.ts";

const myObjects: string[] = [];

class InMemoryAdapter implements BankAccountRepository {
    insert(obj: { name: string, telephone: string }) {
        myObjects.push(JSON.stringify({ obj }));
        return Promise.resolve();
    }
}

export default InMemoryAdapter;