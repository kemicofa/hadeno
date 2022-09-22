class BankAccount {
    name: string;
    telephone: string;

    constructor(
        name: string,
        telephone: string
    ){
        if(telephone.length < 10) {
            throw new Error('Telephone needs at least 10 characters');
        }
        this.name = name;
        this.telephone = telephone;
    }
}

export default BankAccount;