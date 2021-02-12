import { Request, Response } from "express";
import { Filling } from "../../entities/Filling";
import { GetListFillingsCase } from "./GetListFillingsCase";

export class GetListFillingsController {
    constructor(
        private GetListFillingsCase: GetListFillingsCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            var data: Filling[] = await this.GetListFillingsCase.queryAll()
            return response.json({ data: data, recomedation: data?.[data.length - 1] });
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}