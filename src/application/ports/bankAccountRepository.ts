interface BankAccountRepository {
    insert(obj: { name: string, telephone: string }): Promise<void>;
}

export default BankAccountRepository;