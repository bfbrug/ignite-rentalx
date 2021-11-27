import { Router } from 'express';

import { CreateRentalController } from '@modules/rentals/useCases/createRental/CreateRentalController';
import { DevolutionRentalController } from '@modules/rentals/useCases/devolutionRental/DevolutionRentalController';
import { ListRentalsByUserController } from '@modules/rentals/useCases/listRentalsByUser/ListRentalsByUserController';

import { ensureAutheticated } from '../middlewares/ensureAutheticated';

const rentalsRoutes = Router();

const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();
const listRentalsByUserController = new ListRentalsByUserController();

rentalsRoutes.post('/', ensureAutheticated, createRentalController.handle);
rentalsRoutes.post(
  '/devolution/:id',
  ensureAutheticated,
  devolutionRentalController.handle,
);

rentalsRoutes.get(
  '/user',
  ensureAutheticated,
  listRentalsByUserController.handle,
);

export { rentalsRoutes };
