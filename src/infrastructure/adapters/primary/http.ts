import { Router,Application } from "../../../deps.ts";
import { openBankAccount } from '../../container.ts';

const router = new Router();

router
    .post('/open-bank-account', async (context) => {
        const result = context.request.body();
        if(result.type !== 'json') {
            context.throw(400, 'Expected json body');
        }
        const bankAccount = await openBankAccount.open({
            ...await result.value
        })
        context.response.body = bankAccount
    })

const app = new Application();

app.addEventListener("error", (evt) => {
    // Will log the thrown error to the console.
    console.log(evt.error);
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });