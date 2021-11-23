import { Router } from 'express';

import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationsController } from '@modules/cars/useCases/listSpecifications/ListSpecificationsController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAutheticated } from '../middlewares/ensureAutheticated';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.post(
  '/',
  ensureAutheticated,
  ensureAdmin,
  createSpecificationController.handle,
);
specificationsRoutes.get(
  '/',
  ensureAutheticated,
  ensureAdmin,
  listSpecificationsController.handle,
);

export { specificationsRoutes };
