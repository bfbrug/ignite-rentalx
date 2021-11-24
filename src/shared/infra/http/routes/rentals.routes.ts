import { Router } from 'express';

import { CreateRentalController } from '@modules/rentals/useCases/createRental/CreateRentalController';

import { ensureAutheticated } from '../middlewares/ensureAutheticated';

const rentalsRoutes = Router();

const createRentalController = new CreateRentalController();

rentalsRoutes.post('/', ensureAutheticated, createRentalController.handle);

export { rentalsRoutes };
