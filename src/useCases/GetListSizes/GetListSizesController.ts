import { Request, Response } from "express";
import { Size } from "../../entities/Size";
import { GetListSizesCase } from "./GetListSizesCase";

export class GetListSizesController {
    constructor(
        private GetListSizesCase: GetListSizesCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            var data: Size[] = await this.GetListSizesCase.queryAll()
            return response.json(data);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}