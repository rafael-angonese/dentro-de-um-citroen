import { Request, Response } from "express";
import { ListBankAccountService } from "../../services/bank_accounts/list.service";

const listService = new ListBankAccountService();

export class ListBankAccountController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { user_id } = request.auth

        const result = await listService.execute({ user_id })

        return response.json(result)
    }
}