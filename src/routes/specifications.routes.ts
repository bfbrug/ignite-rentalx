import { Router } from 'express';

import { ensureAutheticated } from '../middlewares/ensureAutheticated';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationsController } from '../modules/cars/useCases/listSpecifications/ListSpecificationsController';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();

specificationsRoutes.use(ensureAutheticated);
specificationsRoutes.post('/', createSpecificationController.handle);
specificationsRoutes.get('/', listSpecificationsController.handle);

export { specificationsRoutes };
