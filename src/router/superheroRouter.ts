import { Router } from 'express';
import { superheroModel } from '../database/schemas/superhero';

const router = Router();

router.post('/', async (req, res, next) => {
    try {
        const createdSuperhero = await superheroModel.create(req.body);
        res.json(createdSuperhero);
    } catch (e) {
        next(e);
    }
});

router.get('/', async (req, res, next) => {
    try {
        const superheros = await superheroModel.find({});
        return superheros;
    } catch (e) {
        next(e);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const superhero = await superheroModel.findOne({ id });
        return superhero;
    } catch (e) {
        next(e);
    }
});

router.patch('/:id', async (req, res, next) => {
    try {
        const superheros = await superheroModel
            .findByIdAndUpdate(req.params.id, req.body);
        return superheros;
    } catch (e) {
        next(e);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const superhero = await superheroModel
            .deleteOne({ id });
        return superhero;
    } catch (e) {
        next(e);
    }
});

export const superheroRouter = router;
