import { Request, Response } from "express";
import { ListAccountService } from "../../services/accounts/list.service";

const listService = new ListAccountService();

export class ListAccountController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { user_id } = request.auth

        const result = await listService.execute({ user_id })

        return response.json(result)
    }
}