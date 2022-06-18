import { Router } from 'express';

import { CategoriesRepository as RCategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const CategoriesRepository = new RCategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    CategoriesRepository.create({ name, description })

    return response.status(201).send();
})

export { categoriesRoutes };
