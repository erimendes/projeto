import express from 'express';
import { list, create, update } from '../controllers';
import { IRepository } from '../repository';

export const Routes = (repository: IRepository) => {
    const router = express.Router();

    router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now());

        next();
    });

    router.get('/', async (req, res) => {
        try {
            const rows = await list(repository);
    
            return res.send({ rows });
        } catch (err) {
            console.log(err);
            res.status(400).send({ error: `Erro ao consultar.`, err });
        }
    });

    router.put('/', async (req, res) => {

        const {
            _id,
            ...data
        } = req.body;

        try {
            const rows = await update(data, repository);
    
            return res.send({ rows });
        } catch (err) {
            console.log(err);
            res.status(400).send({ error: `Erro ao atualizar.`, err });
        }
    });

    router.post('/', async (req, res) => {

        const {
            _id,
            ...data
        } = req.body;

        try {
            const rows = await create(data, repository);
    
            return res.send({ rows });
        } catch (err) {
            console.log(err);
            res.status(400).send({ error: `Erro ao criar.`, err });
        }
    });


    return router;
}