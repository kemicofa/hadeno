import OpenBankAccount from "../../application/features/openBankAccount.ts";
import InMemoryAdapter from "../secondary/inMemoryAdapter.ts";
import BankAccountRepository from '../../application/ports/bankAccountRepository.ts';

interface CliParams {
    openBankAccount: {
        name: string;
        phone: string;
    }
}


const createCli =  (bankAccountRepository: BankAccountRepository) => async (params: CliParams) => {
    const openBankAccount = new OpenBankAccount(bankAccountRepository);
    // library extract informations du cli
    if(params.openBankAccount) {
        console.log(await openBankAccount.open({
            name: params.openBankAccount.name,
            telephone: params.openBankAccount.phone
        }));
    }
}

const cli = createCli(new InMemoryAdapter());

// Fake cli
cli({
    openBankAccount: {
        name: "Kevin",
        phone: "+3300000000"
    }
});
