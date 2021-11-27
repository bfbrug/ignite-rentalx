import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListRentalsByUserUserCase } from './ListRentalsByUserUserCase';

class ListRentalsByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listRentalsByUserUseCase = container.resolve(
      ListRentalsByUserUserCase,
    );

    const rentals = await listRentalsByUserUseCase.execute(id);

    return response.json(rentals);
  }
}

export { ListRentalsByUserController };
