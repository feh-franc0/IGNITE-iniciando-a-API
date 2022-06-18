import { Router } from 'express';

import { CategoriesRepository as RCategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const CategoriesRepository = new RCategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const categoryAlreadyExists = CategoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
        return response.status(400).json({ error: "Category Already Exists" })
    }

    CategoriesRepository.create({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const all = CategoriesRepository.list();

    return response.json(all);
});

export { categoriesRoutes };
